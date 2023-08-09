
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let res = [];
    if (matrix == 0 || matrix == undefined) {
      return []; 
    }
    else {
      matrix.forEach((arr, i) => {
        if (i % 2 !== 0) {
          arr.reverse();
        }
  
        res.push(...arr);
      })
    }
    return res;
}
