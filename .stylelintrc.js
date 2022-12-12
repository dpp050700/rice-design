module.exports = {
  extends: [
    'stylelint-config-standard', // 配置stylelint拓展插件
    'stylelint-config-prettier', // 配置stylelint和prettier兼容
    'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件
    'stylelint-config-standard-scss' // 配置stylelint scss插件
  ],
  rules: {
    'rule-empty-line-before': [
      'always',
      { except: ['after-single-line-comment', 'first-nested'] }
    ],
    'max-empty-lines': 1,
    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'after-dollar-variable']
      }
    ],
    'string-quotes': 'single',
    'scss/no-global-function-names': null,
    'font-family-no-duplicate-names': [
      'always',
      { ignoreFontFamilyNames: ['monospace'] }
    ],
    'property-no-vendor-prefix': null,
    'color-function-notation': 0,
    'selector-class-pattern': 0
  }
};
