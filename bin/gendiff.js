#!/usr/bin/env node

import { program } from 'commander'
import parse from '../src/parsing.js'

/* const command = () => {
  console.log('Hello, World!')
}; */

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    parse(filepath1)
    parse(filepath2)
  })
  .parse(process.argv)
