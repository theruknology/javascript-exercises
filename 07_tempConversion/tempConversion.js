const ftoc = function(t) {
  
  return Math.round(((t-32) * (5/9)) * 10) / 10;

};

const ctof = function(t) {

  return Math.round(((t*(9/5)) + 32) *10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
