"build:types": "tsc --emitDeclarationOnly",

"import": "./index.js",
"browser": "./index.js"

"types": "dist/index.d.ts",
"types": "./types/index.d.ts",

"./tailwind/": {
      "solid": "./dist/tailwind/index.jsx",
      "import": "./dist/tailwind/index.js",
      "browser": "./dist/tailwind/index.js",
      "require": "./dist/cjs/my-lib.js",
      "node": "./dist/cjs/my-lib.js"
    }
},

"exports": {
".": {
"solid": "./dist/index.jsx",
"default": "./dist/index.js"
},
"./tailwind":  {
"solid": "./dist/tailwind/index.jsx",
"default": "./dist/tailwind/index.js"
}
},