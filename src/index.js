module.exports = function check(str, bracketsConfig) {
    var arr = [],
        len = str.length,
        count = 0;

    

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < bracketsConfig.length; j++) {
            if (str.charAt(i) === bracketsConfig[j][0]) {
                arr.push(str.charAt(i));
            }
            if (str.charAt(i) === bracketsConfig[j][1]) {
                if (arr[arr.length - 1] === bracketsConfig[j][0]) {
                    arr.pop();
                }
            }
            console.log(arr)
        }
    }
    if (arr.length === 0) return true;
    return false;
}