Dessert YAML-JS
============

[![NPM version](https://img.shields.io/npm/v/dessert-yaml-js.svg)](https://www.npmjs.org/package/dessert-yaml-js)

This library is a clone of [yaml-js] implemented in Rust for WebAssembly.

*dessert-yaml-js* is a connector with the WASM core: [dessert-yaml-core]

For more information, refer to the [core]

[yaml-js]: https://github.com/connec/yaml-js#api-summary
[dessert-yaml-core]: https://github.com/dessert-wasm/dessert-yaml-core
[core]: https://github.com/dessert-wasm/dessert-yaml-core#readme

To see how it performs compared to yaml-js, see [here]

[here]: https://github.com/dessert-wasm/dessert-yaml-core#performance

## Summary
* [Installation](#installation)
* [API](#api)


## Installation
```sh
npm install dessert-yaml-js
```

## API

The api should be the same as [yaml-js], but not all methods are supported yet

[yaml-js]: https://github.com/connec/yaml-js#api-summary

``` javascript
yaml = require('dessert-yaml-js');

// Get document, or throw exception on error
try {
  let doc = yaml.load("a: b");
  console.log(doc);

  // Print the parsed object as a YAML stream
  let yaml_stream = yaml.dump(doc);
  console.log(yaml_stream);
} catch (e) {
  console.log(e);
}
```

### load(string, [, options])
Most simple way of parsing a document. Parses string as single YAML document. Returns a JavaScript object or throws YAMLException on error. options aren't used as for now.


### load_all(string, [, options])
Currently same as load() because serde_yaml doesn't support multi document yet, and data structure from yaml-rust aren't serializable.

### dump(object, [, options])
Serializes object as a YAML document

### dump_all(objects, [, options])
Serializes several objects as a YAML stream
