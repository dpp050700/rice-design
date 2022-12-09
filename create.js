#! /usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const { Command } = require('commander');
const path = require('path');
const fs = require('fs-extra');

const program = new Command();

program.version('0.0.1').usage('<command> [options]');

program.command('create <name>').description('Create Component').action(create);

program.parse();

function smallCamel(str, separator = '-') {
  const reg = new RegExp(`${separator}([a-z])`, 'g');
  return str.replace(reg, (p, m) => m.toUpperCase());
}
function bigCamel(str, separator = '-') {
  const s = smallCamel(str, separator);
  return s.replace(s.charAt(0), s.charAt(0).toUpperCase());
}

function create(name) {
  try {
    const componentBasicPath = path.resolve('src/components');
    const bigCamelName = bigCamel(name);
    const componentPath = path.resolve(componentBasicPath, bigCamelName);
    if (fs.pathExistsSync(componentPath)) {
      throw new Error(`${bigCamelName} 组件已存在`);
    }
    fs.ensureDirSync(componentPath);
    createTSXTemplate(
      bigCamelName,
      path.resolve(componentPath, `${smallCamel(name)}.tsx`)
    );
    createScssTemplate(
      path.resolve(componentPath, `_${smallCamel(name)}.scss`),
      bigCamelName
    );
  } catch (e) {
    console.log(e.message);
  }
}

function createTSXTemplate(componentName, filePath) {
  let template =
    `import React from 'react';\n` +
    `import classnames from 'classnames';\n` +
    `interface ${componentName}Props {\n` +
    `  className?: string;\n` +
    `}\n\n` +
    `const ${componentName}: React.FC<${componentName}Props> = (props) => {\n` +
    `  const { className } = props;\n` +
    `  const classes = classnames(className);\n\n` +
    `  return <i className={classes}></i>;\n` +
    `};\n\n` +
    `${componentName}.defaultProps = {};\n\n` +
    `export default ${componentName};\n`;

  fs.writeFileSync(filePath, template);
}

function createScssTemplate(filePath, componentName) {
  const scssEntry = path.resolve('src/styles/index.scss');
  fs.writeFileSync(filePath, '');
  const content = fs.readFileSync(scssEntry, 'utf8');
  fs.writeFileSync(
    scssEntry,
    `${content}\n@import '../components/${componentName}/${smallCamel(
      componentName
    )};'`
  );
}
