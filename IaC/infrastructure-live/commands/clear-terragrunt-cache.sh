# !/bin/sh

find . -type d -name ".terragrunt-cache" -prune -exec rm -rf {} \;
find . -type d -name ".terraform.lock.hcl" -prune -exec rm -rf {} \;