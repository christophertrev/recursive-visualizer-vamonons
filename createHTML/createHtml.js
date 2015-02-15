var fs  = require('fs');
var arguments = process.argv.slice(2);
// console.log(arguments)

fs.readFile(__dirname +'/' +arguments[0], 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  // data.split('/n')
  // console.log(data.split('\n'));
  createPseudoCode(data)
});


var keywords= ['var', 'function','if', 'return']

var createPseudoCode = function (codeStr){

  console.log(codeStr.split(/\n/))
}



