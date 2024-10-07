
// Check whether a string contains all the vowels a, e, i, o, u


function containsAllVowels(input) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // let contain = input[0];
    input = input.toLowerCase();
    for(const vowel of vowels){
        if(!input.includes(vowel)){
            return 'no all vowels';
        }
        else {
            return 'has all vowels'
        }
    }
}
const input = "educAtion"
console.log(containsAllVowels(input))








// const vowels = ["a", "e", "i", "o", "u"];
// for (const vowel of myChoice) {
    // console.log(vowel);
    // if (myChoice.length === "a") {
    //     console.log(myChoice);
    // }
    // console.log(myChoice.includes(vowel));
// }