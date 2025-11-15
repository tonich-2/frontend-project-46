#!/usr/bin/env node
import { program } from 'commander'

/* const command = () => {
  console.log('Hello, World!')
}; */

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
//  .action(command)
  .parse(process.argv)
