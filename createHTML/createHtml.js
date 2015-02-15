var fs  = require('fs');
var arguments = process.argv.slice(2);
// console.log(arguments)

fs.readFile(__dirname +'/' +arguments[0], 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  // data.split('/n')
  // console.log(data.split('\n'));
  //Create object to place into PsudeoCode area
  var results = {}
  // results.pseudoCode = createPseudoCode(data);
  // console.log('end Product', createPseudoCode(data))
  // console.log(results)
  console.log(createAlgorithmCode(data))
});


var keywords= ['var', 'function','if', 'return']

var createPseudoCode = function (codeStr){
  // Remove var key words and { or }
  var results = codeStr.replace(/var |{|}/g,'')
  // Remove empty Lines
  results = results.replace(/^\s*[\r\n]/gm,'')
  return results;
}

var createAlgorithmCode = function (codeStr){
  // Break into lines
  var codeLines = codeStr.split(/\n/g);
  var results = [];
  codeLines.forEach(function (value, index, array){
    // if( )
    results.push( '_(' + index+'); '  + value )
  })


  return results;
}



