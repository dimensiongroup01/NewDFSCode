$ErrorActionPreference = "Stop"

$repoRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot ".."))
$deployRoot = Join-Path $repoRoot "deploy\iis"
$standaloneRoot = Join-Path $repoRoot ".next\standalone"
$staticRoot = Join-Path $repoRoot ".next\static"
$publicRoot = Join-Path $repoRoot "public"
$webConfigPath = Join-Path $deployRoot "web.config"

if (Test-Path -LiteralPath $deployRoot) {
  Remove-Item -LiteralPath $deployRoot -Recurse -Force
}

New-Item -ItemType Directory -Path $deployRoot | Out-Null

Push-Location $repoRoot
try {
  & powershell -ExecutionPolicy Bypass -File (Join-Path $PSScriptRoot "clean-next-cache.ps1")
  if ($LASTEXITCODE -ne 0) {
    throw "Failed to clean the .next cache."
  }

  & npm.cmd run build
  if ($LASTEXITCODE -ne 0) {
    throw "Next.js build failed."
  }
} finally {
  Pop-Location
}

if (-not (Test-Path -LiteralPath $standaloneRoot)) {
  throw "Standalone output was not generated at $standaloneRoot."
}

Copy-Item -Path (Join-Path $standaloneRoot "*") -Destination $deployRoot -Recurse -Force

$deployStaticRoot = Join-Path $deployRoot ".next\static"
New-Item -ItemType Directory -Path $deployStaticRoot -Force | Out-Null
Copy-Item -Path (Join-Path $staticRoot "*") -Destination $deployStaticRoot -Recurse -Force

$deployPublicRoot = Join-Path $deployRoot "public"
if (Test-Path -LiteralPath $publicRoot) {
  Copy-Item -Path (Join-Path $publicRoot "*") -Destination $deployPublicRoot -Recurse -Force
}

$webConfig = @"
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <handlers>
      <add name="iisnode" path="server.js" verb="*" modules="iisnode" />
    </handlers>
    <rewrite>
      <rules>
        <rule name="NextJsStandalone" stopProcessing="true">
          <match url=".*" />
          <action type="Rewrite" url="server.js" />
        </rule>
      </rules>
    </rewrite>
    <iisnode nodeProcessCommandLine="C:\Program Files\nodejs\node.exe" />
  </system.webServer>
</configuration>
"@

[System.IO.File]::WriteAllText($webConfigPath, $webConfig, [System.Text.Encoding]::UTF8)

Write-Host "Deploy package created at $deployRoot"
