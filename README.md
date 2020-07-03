# 1. yarn run eject
## generate babel

# 2. modify babel
##  "babel": {
##    "plugins": [
##      [
##        "@babel/plugin-proposal-decorators",
##        {
##          "legacy": true
##        }
##     ],
##      [
##        "@babel/plugin-proposal-class-properties",
##        {
##         "loose": true
##        }
##      ]
##    ]
##  }

# 3. modify eslintConfig
##  "eslintConfig": {
##    "parserOptions": {
##      "ecmaFeatures": {
##        "legacyDecorators": true
##      }
##    }
##  }

# 4. import library
## mobx mobx-react