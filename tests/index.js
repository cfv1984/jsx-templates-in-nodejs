require("@babel/register");
const {log, error:err} = console;
const plain = require('./plain');
const jsx   = require('./jsx');

log("Markup generation tests");

try{
    log("- JSX");
    jsx();
}
catch(error){
    err(error.message);
    process.exit(1);
}

try{
    log("- Plain JS helper functions");
    plain();
}
catch(error){
    err(error.message);
    process.exit(1);
}

log("All tests pass");