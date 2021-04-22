module.exports = {
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    },
    "vue-jest": {
      "tsConfig": 'tsconfig.json'
    }
  },
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "./node_modules/babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    // "^.+\\.svg$": "<rootDir>/test/svgTransform.js" 
  },
  moduleNameMapper: {
    // "^Src/(.*)$": "<rootDir>/src/$1",
    // "\\.(css|scss)$": "<rootDir>/test/cssStub.js"
  },
  // setupFiles: [
  //   "<rootDir>/test/setup.js"
  // ]
}
