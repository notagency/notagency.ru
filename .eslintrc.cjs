/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  "rules": {
    "camelcase": "off",
    "no-cond-assign": "error",
    "no-inner-declarations": "error",
    "no-lonely-if": "error",
    "no-shadow-restricted-names": "error",
    "no-throw-literal": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-promise-reject-errors": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "vue/attributes-order": ["error", {
      "order": [
        "CONDITIONALS",
        "LIST_RENDERING",
        "DEFINITION",
        "RENDER_MODIFIERS",
        "GLOBAL",
        ["UNIQUE", "SLOT"],
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "OTHER_ATTR",
        "EVENTS",
        "CONTENT"
      ],
      "alphabetical": false
    }],
    "vue/html-button-has-type": ["error", {
      "button": true,
      "submit": true,
      "reset": true
    }]
  }
}
