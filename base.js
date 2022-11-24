module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  },
  "plugins": ["react", "@typescript-eslint", "react-hooks", "prettier"],
  "rules": {
    "no-var-requires": ["off"],
    "react/react-in-jsx-scope": ["off"],

    // eslint-config
    "no-empty": 0,
    "valid-jsdoc": [1, {"requireParamDescription": false, "requireReturnDescription": false}],

    // Best Practise
    "array-callback-return": 2,
    "block-scoped-var": 1,
    "complexity": ["warn", 20],
    "consistent-return": 1,
    "no-unused-vars": ["off"],
    "curly": ["error"],
    "dot-location": ["error", "property"],
    "eqeqeq": ["warn", "always"],
    "guard-for-in": ["error"],
    "no-caller": ["error"],
    "no-console": ["warn"],
    "no-div-regex": ["warn"],
    "no-eq-null": ["error"],
    "no-eval": ["warn"],
    "no-extend-native": ["error"],
    "no-extra-bind": ["warn"],
    "no-extra-label": ["error"],
    "no-floating-decimal": ["error"],
    "no-global-assign": ["warn"],
    "no-implicit-coercion": ["warn"],
    "no-implicit-globals": ["warn"],
    "no-implied-eval": ["warn"],
    "no-iterator": ["error"],
    "no-labels": ["error"],
    "no-loop-func": ["error"],
    "no-new": ["error"],
    "no-new-func": ["warn"],
    "no-new-wrappers": ["error"],
    "no-octal-escape": ["error"],
    "no-param-reassign": ["warn"],
    "no-proto": ["error"],
    "no-return-assign": ["error", "always"],
    "no-script-url": ["error"],
    "no-self-compare": ["error"],
    "no-sequences": ["error"],
    "no-throw-literal": ["warn"],
    "no-unmodified-loop-condition": ["error"],
    "no-unused-expressions": ["error"],
    "no-useless-call": ["error"],
    "no-useless-concat": ["error"],
    "no-void": ["error"],
    "no-with": ["error"],
    "radix": ["warn"],
    "wrap-iife": ["error"],

    //// Variables
    "no-label-var": ["error"],
    "no-shadow": ["warn"],
    "no-shadow-restricted-names": ["error"],
    "no-undef-init": ["error"],
    "no-use-before-define": ["warn", {"functions": false}],

    // Node.js and CommonJS
    "callback-return": ["warn"],
    "handle-callback-err": ["warn"],
    "no-new-require": ["error"],
    "no-path-concat": ["warn"],

    // Stylistic Issues
    "camelcase": ["error", {"properties": "never"}],
    "comma-style": ["error", "last"],
    "max-depth": ["warn", {"maximum": 5}],
    "new-cap": "error",
    "new-parens": "error",
    "no-array-constructor": ["warn"],
    "no-bitwise": "error",
    "no-lonely-if": ["warn"],
    "no-negated-condition": ["warn"],
    "no-nested-ternary": ["warn"],
    "no-new-object": ["warn"],
    "no-restricted-syntax": ["error", "WithStatement"],
    "no-unneeded-ternary": "error",

    // ECMAStrict 6
    "no-duplicate-imports": ["error"],
    "no-useless-constructor": ["error"],
    "no-var": ["error"],
    "prefer-arrow-callback": ["warn", {"allowNamedFunctions": true}],
    "prefer-const": ["error"],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "require-atomic-updates": ["off"],
    "require-yield": ["warn"]
  },
  "overrides": [
    // start
    {
      "files": ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      "extends": ["plugin:testing-library/react"]
    },
    {
      "files": ["**/__stories__/**/*.[jt]s?(x)"],
      "rules": {
        "no-console": "off"
      }
    },
    // end
    // eslint-congif
    {
      "files": ["*.ts", "*.tsx"],
      "parser": "@typescript-eslint/parser",
      "plugins": ["@typescript-eslint"],
      "rules": {
        "strict": ["off"],
        "no-undef": ["off"],
        "no-dupe-class-members": ["off"],
        "valid-jsdoc": [
          "warn",
          {
            "requireReturnType": false,
            "requireParamType": false,
            "requireParamDescription": false,
            "requireReturnDescription": false
          }
        ],

        // TypeScript specific extension rules
        "no-array-constructor": ["off"],
        "no-duplicate-imports": ["off"],
        "no-loop-func": ["off"],
        "no-redeclare": ["off"],
        "no-shadow": ["off"],
        "no-unused-expressions": ["off"],
        "no-unused-vars": ["off"],
        "no-use-before-define": ["off"],
        "no-useless-constructor": ["off"],
        "@typescript-eslint/no-var-requires": ["off"],
        "@typescript-eslint/no-array-constructor": ["warn"],
        "@typescript-eslint/no-duplicate-imports": ["error"],
        "@typescript-eslint/no-loop-func": ["error"],
        "@typescript-eslint/no-redeclare": ["error"],
        "@typescript-eslint/no-shadow": ["warn"],
        "@typescript-eslint/no-unused-expressions": ["error"],
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            "argsIgnorePattern": "^_",
            "varsIgnorePattern": "^_"
          }
        ],

        "@typescript-eslint/no-use-before-define": ["warn", {"functions": false}],
        "@typescript-eslint/no-useless-constructor": ["error"],

        "@typescript-eslint/naming-convention": [
          "error",
          {
            "selector": "typeLike",
            "format": ["PascalCase"],
            "leadingUnderscore": "forbid"
          }
        ],
        "@typescript-eslint/member-delimiter-style": ["error"],
        "@typescript-eslint/member-ordering": [
          "error",
          {
            "default": [
              "public-static-field",
              "protected-static-field",
              "private-static-field",

              "public-static-method",
              "protected-static-method",
              "private-static-method",

              "public-instance-field",
              "protected-instance-field",
              "private-instance-field",

              "constructor",

              "public-instance-method",
              "protected-instance-method",
              "private-instance-method"
            ]
          }
        ],

        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {"accessibility": "no-public"}
        ],
        "@typescript-eslint/consistent-type-assertions": ["error"],
        "@typescript-eslint/no-explicit-any": ["warn"],
        "@typescript-eslint/no-inferrable-types": ["error"],
        "@typescript-eslint/no-namespace": ["error"],
        "@typescript-eslint/no-non-null-assertion": ["warn"],
        "@typescript-eslint/no-parameter-properties": ["error"],
        "@typescript-eslint/triple-slash-reference": ["error"],
        "@typescript-eslint/prefer-namespace-keyword": ["error"],
        "@typescript-eslint/type-annotation-spacing": [
          "error",
          {
            "before": true,
            "after": true,
            "overrides": {
              "colon": {
                "before": false
              }
            }
          }
        ]
      }
    }
  ]
}