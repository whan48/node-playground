if(typeof process === 'undefined' ) { // browser 
  console.log('process is not defined');
} 
else { // node.js
  console.log(process.versions);
}
