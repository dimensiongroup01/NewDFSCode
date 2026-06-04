$ErrorActionPreference = "Stop"

$nextDir = Join-Path $PSScriptRoot "..\.next"
$resolvedNextDir = [System.IO.Path]::GetFullPath($nextDir)

if (Test-Path -LiteralPath $resolvedNextDir) {
  Remove-Item -LiteralPath $resolvedNextDir -Recurse -Force
  Write-Host "Removed .next cache."
} else {
  Write-Host ".next cache not found."
}
