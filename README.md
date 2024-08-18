[![view on npm](https://badgen.net/npm/v/dmd)](https://www.npmjs.org/package/dmd)
[![npm module downloads](https://badgen.net/npm/dt/dmd)](https://www.npmjs.org/package/dmd)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/jsdoc2md/dmd)](https://github.com/jsdoc2md/dmd/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/jsdoc2md/dmd)](https://github.com/jsdoc2md/dmd/network/dependents?dependent_type=PACKAGE)
[![Node.js CI](https://github.com/jsdoc2md/dmd/actions/workflows/node.js.yml/badge.svg)](https://github.com/jsdoc2md/dmd/actions/workflows/node.js.yml)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# @liquid-labs/dmd

This is a fork of the [dmd](https://github.com/jsdoc2md/dmd). Because [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown) hard codes the 'dmd' package, you must use our fork of that project, [@liquid-labs/jsdoc-to-markdown](https://github.com/liquid-labs/jsdoc-to-markdown) with this package.

This package adds the following features:

- grouping global identifiers,
- clever links and monospace links, and
- passes additional context when grouping identifiers.

This is all intended primarily for use with [dmd-readme-api](https://github.com/liquid-labs/dmd-readme-api), which is a plugin that further modifies the DMD template with a number of enhancements including support for groped global identifiers, links to source code, links from documentation back to indexes, and just generally a more compact, style.

This package is being published because a number of my other projects rely on these changes. There are pull requests for all the changes and if/when they are incorporated into the original project, this one will be deprecated. On the other hand, if the changes are not adopted, then we will continue to maintain this fork.

dmd (document with markdown) is the default output template for [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown). It contains [handlebars](http://handlebarsjs.com) partials and helpers intended to transform [jsdoc-parse](https://github.com/jsdoc2md/jsdoc-parse) output into markdown API documentation.

For more documentation see the [jsdoc2md wiki](https://github.com/jsdoc2md/jsdoc-to-markdown/wiki).

## Synopsis

To give the most basic example, this input data:

```js
const templateData = [
  {
    id: "fatUse",
    name: "fatUse",
    kind: "member",
    description: "I am a global variable",
    scope: "global"
  }
]
```

run through this command:

```js
const dmd = require('dmd')
dmd(templateData)
```

produces this markdown output:

```
<a name="fatUse"></a>
## fatUse
I am a global variable

**Kind**: global variable
```

* * *

&copy; 2014-24 Lloyd Brookes \<75pound@gmail.com\>.

Fork changes by Zane Rockenbaugh \<zane@liquid-labs.com\>

Tested by [test-runner](https://github.com/test-runner-js/test-runner). Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
