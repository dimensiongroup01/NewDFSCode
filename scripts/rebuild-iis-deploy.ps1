$ErrorActionPreference = "Stop"

$repoRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot ".."))
$iisDeployRoot = $env:DFS_IIS_DEPLOY_ROOT
if ([string]::IsNullOrWhiteSpace($iisDeployRoot)) {
  $iisDeployRoot = Join-Path $repoRoot "deploy\iis"
}

$resolvedDeployRoot = [System.IO.Path]::GetFullPath($iisDeployRoot)
$standaloneRoot = Join-Path $repoRoot ".next\standalone"
$staticRoot = Join-Path $repoRoot ".next\static"
$publicRoot = Join-Path $repoRoot "public"

if (-not (Test-Path -LiteralPath $repoRoot)) {
  throw "Repository root not found at $repoRoot."
}

Write-Host "Cleaning previous build at $resolvedDeployRoot"
if (Test-Path -LiteralPath $resolvedDeployRoot) {
  Remove-Item -LiteralPath $resolvedDeployRoot -Recurse -Force
}

New-Item -ItemType Directory -Path $resolvedDeployRoot -Force | Out-Null

& powershell -ExecutionPolicy Bypass -File (Join-Path $PSScriptRoot "clean-next-cache.ps1")
if ($LASTEXITCODE -ne 0) {
  throw "Failed to clean the .next cache."
}

Push-Location $repoRoot
try {
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

Get-ChildItem -LiteralPath $standaloneRoot -Force | ForEach-Object {
  Copy-Item -LiteralPath $_.FullName -Destination $resolvedDeployRoot -Recurse -Force
}

$deployStaticRoot = Join-Path $resolvedDeployRoot ".next\static"
New-Item -ItemType Directory -Path $deployStaticRoot -Force | Out-Null
Get-ChildItem -LiteralPath $staticRoot -Force | ForEach-Object {
  Copy-Item -LiteralPath $_.FullName -Destination $deployStaticRoot -Recurse -Force
}

$deployPublicRoot = Join-Path $resolvedDeployRoot "public"
if (Test-Path -LiteralPath $publicRoot) {
  New-Item -ItemType Directory -Path $deployPublicRoot -Force | Out-Null
  Get-ChildItem -LiteralPath $publicRoot -Force | ForEach-Object {
    Copy-Item -LiteralPath $_.FullName -Destination $deployPublicRoot -Recurse -Force
  }
}

Write-Host "Fresh IIS deploy created at $resolvedDeployRoot"
Write-Host "If you want to publish directly to IIS, set DFS_IIS_DEPLOY_ROOT to an elevated writable path such as C:\inetpub\wwwroot\DFS\standalone and rerun PowerShell as Administrator."
