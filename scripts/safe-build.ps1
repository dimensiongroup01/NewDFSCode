$ErrorActionPreference = "Stop"

$repoRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot ".."))
$contactPage = Join-Path $repoRoot "app\contact\page.tsx"
$gitDir = Join-Path $repoRoot ".git"

if (-not (Test-Path -LiteralPath $contactPage)) {
  if (Test-Path -LiteralPath $gitDir) {
    Write-Host "Contact page missing. Restoring app/contact/page.tsx from HEAD..."
    $restored = git -C $repoRoot show HEAD:app/contact/page.tsx 2>$null
    if ($LASTEXITCODE -eq 0 -and $restored) {
      $parentDir = Split-Path -Parent $contactPage
      if (-not (Test-Path -LiteralPath $parentDir)) {
        New-Item -ItemType Directory -Path $parentDir | Out-Null
      }
      [System.IO.File]::WriteAllText($contactPage, $restored, [System.Text.Encoding]::UTF8)
    } else {
      throw "Unable to restore app/contact/page.tsx from git history."
    }
  } else {
    throw "Contact page is missing and this folder is not a git repository."
  }
}

& powershell -ExecutionPolicy Bypass -File (Join-Path $PSScriptRoot "clean-next-cache.ps1")
if ($LASTEXITCODE -ne 0) {
  throw "Failed to clean the .next cache."
}

Push-Location $repoRoot
try {
  & npm.cmd run build
  if ($LASTEXITCODE -ne 0) {
    throw "Build failed."
  }
} finally {
  Pop-Location
}
