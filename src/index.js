module.exports = function check(str, bracketsConfig) {
    if (!str) {
        return true;
    }
    for (let i = 0; i < str.length - 1; i++) {
        let j = bracketsConfig.find(config => config[0] === str[i]);
        if (!j) {
            return false;
        }
        if (str[i + 1] === j[1]) {
            str = str.replace(j.join(''), '');
            return check(str, bracketsConfig);
        }
    }
    return false;
};