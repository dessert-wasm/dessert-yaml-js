let wasm = require('dessert-yaml/dessert_yaml_core');

function dump_all(objs) {
  let res = "";
  objs.forEach(obj => {
    res += wasm.dump(obj);
    res += "\n...\n";
  });
  return res;
}

module.exports.load                = wasm.load;
module.exports.load_all            = wasm.loadAll;
module.exports.dump                = wasm.dump;
module.exports.dump_all            = dump_all;
