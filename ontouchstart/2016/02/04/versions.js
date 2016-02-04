if(typeof process === 'undefined' ) { // browser 
  console.log(navigator.userAgent);
} 
else { // node.js
  console.log(process.versions);
}
