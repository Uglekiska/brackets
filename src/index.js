module.exports = function check(str, bracketsConfig) {
        let array = [];
        let bracketsArray = bracketsConfig.flat();
        const newStr = str.split('');
        for (let i = 0; i < newStr.length; i++) {
            if ((newStr[i] === bracketsArray[1] && array[array.length - 1] === bracketsArray[0]) || (newStr[i] === bracketsArray[3] && array[array.length - 1] === bracketsArray[2]) || (newStr[i] === bracketsArray[5] && array[array.length - 1] === bracketsArray[4]) || (newStr[i] === bracketsArray[7] && array[array.length - 1] === bracketsArray[6]) || (newStr[i] === bracketsArray[9] && array[array.length - 1] === bracketsArray[8])) {
                array.pop(newStr[i - 1]);
            } else {
                array.push(newStr[i]);}}
    return array.length === 0}
