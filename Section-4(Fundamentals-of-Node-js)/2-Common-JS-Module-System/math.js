function sum(...nums) {
  return nums.reduce((c, a) => c + a);
}
function product(...nums) {
  return nums.reduce((c, a) => c * a);
}

module.exports = { sum, product };
