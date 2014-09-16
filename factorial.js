module.exports = {
  execute: function(number){
    var res = 1;
    while (number > 1) {
        res *= number;
        number -= 1;
    }
    return res;
  }
}