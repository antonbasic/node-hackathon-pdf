#!/usr/bin/env node

const fs = require('fs')
const { exec } = require('child_process')
const { promisify } = require('util')

  ;
(async () => {
  // Check for ability to run npm without sudo
  const npmRootDir = await promisify(exec)('npm root -g').then(({ stdout }) => stdout.trim())
  try {
    fs.accessSync(npmRootDir, fs.constants.W_OK)
  } catch (e) {
    console.error(`You are not allowed to use npm without sudo access. Make sure you have write access on ${npmRootDir} or read the following guide https://docs.npmjs.com/getting-started/fixing-npm-permissions`)
    process.exit(1)
  }

  // Check for installed VSCode
  const hasVsc = fs.readdirSync('/Applications')
    .includes('Visual Studio Code.app')

  if (hasVsc) {
    console.log('Visual Studio Code is installed.')
  } else {
    console.error('You need to install Visual Studio Code. Go to https://code.visualstudio.com/Download')
    process.exit(1)
  }

  // Check that eslint plugin is install
  const hasEslint = fs.readdirSync(`${process.env.HOME}/.vscode/extensions`)
    .find(s => s.match(/vscode-eslint/))

  if (hasEslint) {
    console.log('ESLint plugin installed.')
  } else {
    console.error('You need to install ESLint plugin for Visual Studio Code. Go to https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint')
    process.exit(1)
  }

  console.log('Success, your computer is ready!')
})()
