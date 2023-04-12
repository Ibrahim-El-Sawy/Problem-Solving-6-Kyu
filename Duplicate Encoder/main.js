/*
DESCRIPTION:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/



// solution 


function duplicateEncode(str) {
    let word = str.toUpperCase()

    let ar1 = []
    let ar2 = []
    for (let i = 0; i < word.length; i++) {
        if (ar1.includes(word[i]) === false) {
            ar1.push(word[i])
            let str = word.substring(i + 1, word.length)
            if (str.includes(word[i]) === false) {
                ar2.push("(")
            } else {
                ar2.push(")")
            }

        } else {
            ar1.push(word[i])

            ar2.push(")")
        }
    }
    return (ar2.join(""))
}
console.log(duplicateEncode("recede"))