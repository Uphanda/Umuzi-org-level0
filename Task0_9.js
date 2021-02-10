function printVowels(str) {
    const vowels ='aeiouAEIOU';
    let vowelStore = [];

 for(let i = 0; i < str.length ; i++)
  {
    if ((vowels.includes(str[i])))
    {
       vowelStore = vowelStore + str[i];
    }
  }
   return vowelStore;
}

let vowelPrint=printVowels('UNkosinAthi');
console.log(vowelPrint);



