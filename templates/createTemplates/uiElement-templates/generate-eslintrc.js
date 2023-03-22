const generateEsLintRc = () => `
{
    "env": {
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "ignorePatterns": [],
    "extends": ["airbnb-base", "prettier"],
    "rules": {
        "no-underscore-dangle": "off",
        "no-console": "off",
        "camelcase": "off",
        "no-await-in-loop": 0,
        "no-restricted-syntax": 0,
        "no-use-before-define": [
            "error",
            {
          "functions": false
           }
        ]
    }
}
`

module.exports = { generateUiElementsEsLintRc: generateEsLintRc }
