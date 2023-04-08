/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

*/

// solution

function likes(ar) {

    if (ar.length === 0) {
        return "no one likes this"
    } else if (ar.length === 1) {
        return `${ar[0]} likes this`
    } else if (ar.length === 2) {
        return `${ar[0]} and ${ar[1]} like this`
    } else if (ar.length === 3) {
        return `${ar[0]}, ${ar[1]} and ${ar[2]} like this`
    } else {
        return `${ar[0]}, ${ar[1]} and ${ar.length-2} others like this`
    }
}
console.log(likes(["Peter"]))