!function () {
  function main (name) {
    return `Hello ${name}`;
  }

  if (typeof define === "function" && define.amd)  {
    this.hello = main, define(hello); 
  }
  else {
    if (typeof module === "object" && module.exports) {
      module.exports = main; 
    }
    else {
      this.hello = main;
    }
  }
}();
