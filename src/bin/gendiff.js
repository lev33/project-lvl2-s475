#!/usr/bin/env node
import program from 'commander';
import genDiff from '..';

program
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format [type]', 'Output format')
  .action((firstConfig, secondConfig, { format }) => {
    console.log(genDiff(firstConfig, secondConfig, format));
  });

program.parse(process.argv);
