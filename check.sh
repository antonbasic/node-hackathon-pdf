#!/usr/bin/env bash

# Check for version of node
nodeversion=$(node --version)

if ([[ $nodeversion == v10* ]] || [[ $nodeversion == v11* ]])
then 
  node check
else
  echo "You need to have node version 10 or above installed. Download from here (https://nodejs.org) or use nvm"
fi
