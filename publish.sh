#!/bin/bash

# Declare type of release
RELEASE_TYPE=''

# Declare script colors.
COLOR_RED='\033[0;31m'
COLOR_YELLOW='\033[0;33m'
COLOR_DEFAULT='\033[0m'

# Look for provided flag
while [ $# -gt 0 ] ; do
  case $1 in
    -p | --patch) RELEASE_TYPE='patch' ;;
    -m | --minor) RELEASE_TYPE='minor' ;;
    -v | --major) RELEASE_TYPE='major' ;; 
  esac
  shift
done

# Check if flag was provided
if [ -z ${RELEASE_TYPE} ]; then
  echo -e "${COLOR_RED}[ERROR]${COLOR_DEFAULT} No flag was provided"
  exit 1
fi


echo "Publishing new ${RELEASE_TYPE} version"
 
# Sign new package versions
lerna version ${RELEASE_TYPE} --yes

# Publish to NPM
lerna publish from-package