function outputCommonChars(str1, str2) {
    let commonChars = '';
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1.charAt(i) == str2.charAt(j)) {
                commonChars = commonChars + str1.charAt(i);
            }
        }
    }
    return commonChars;
}
let characters = outputCommonChars('nkosi', 'nathi');
console.log(characters.split('').toString());
