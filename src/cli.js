#!/usr/bin/env node

import execPromise from 'exec-promise'
import { promisify } from 'promise-toolbox'
import { readFile, writeFile } from 'fs'

const pReadFile = promisify(readFile)
const pWriteFile = promisify(writeFile)

// ===================================================================

execPromise(async args => {
  if (args.length < 2) {
    throw new Error('not enough args')
  }

  const [ source, target ] = args
  const content = await pReadFile(source)
  await pWriteFile(target, content)
})
