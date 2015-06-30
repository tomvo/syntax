// var page = require('webpage').create();
// page.open('http://github.com/', function() {
//   page.render('github.png');
//   phantom.exit();
// });

var page = require('webpage').create();
var system = require('system');

if(system.args.length < 2){
    console.log('Not enough arguments')
    phantom.exit();
}else{
    var url = system.args[1];
    console.log(url);
    page.open(url, function() {
        page.render('github.png');
        phantom.exit();
    });
   
}


// phantom.exit();
// page.open('http://github.com/', function() {
//   page.render('github.png');
//   phantom.exit();
// });