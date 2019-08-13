// // Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

// // Example output:

// // The

// // The walrus

// // The walrus danced

// // The walrus danced through

// // The walrus danced through the

// // The walrus danced through the trees

// // The walrus danced through the trees in

// // The walrus danced through the trees in the

// // The walrus danced through the trees in the light

// // The walrus danced through the trees in the light of

// // The walrus danced through the trees in the light of the

// // The walrus danced through the trees in the light of the moon ...

// // Paste the following code into overly-excited.js

// // Create an array that contains the words in the sentence
// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// /*
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
// */



// function addExcitement (theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     for (let i = 0; i < theWordArray.length; i++) {
//         let buildMeUp = ""
//         // Concatenate the new word onto buildMeUp
//         buildMeUp = buildMeUp + " " + theWordArray[i]
//         // buildMeUp += `${theWordArray[i]} `
//         // Print buildMeUp to the console
//         console.log(buildMeUp)
//     }

// }

// // Invoke the function and pass in the array
// addExcitement(sentence)
// addExcitement(["taco", "beans", "cheese", "lettuce"])


// The

// The walrus

// The walrus danced!

// The walrus danced! through

// The walrus danced! through the

// The walrus danced! through the trees!

// The walrus danced! through the trees! in

// The walrus danced! through the trees! in the

// The walrus danced! through the trees! in the light!

// The walrus danced! through the trees! in the light! of

// The walrus danced! through the trees! in the light! of the

// The walrus danced! through the trees! in the light! of the moon!

// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// function addExcitement (theWordArray) {
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {

//         if(i%3 === 0 && i != 0){
//             buildMeUp = buildMeUp + " !" + theWordArray[i]
//         } else {
//             buildMeUp = buildMeUp + " " + theWordArray[i]
//         }
//         /*
//             If the current word's place (not index) in the array
//             is evenly divisible by 3, add an exclamation point
//             to the end of the word and then concatenate it to
//             `buildMeUp`.

//             Otherwise, just concatenate the word itself.
//          */


//         // Print buildMeUp to the console
//         console.log(buildMeUp)
//     }

// }

// addExcitement(sentence)


let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, punctuationMark, multiply) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {

        if(i%3 === 0 && i != 0){
            buildMeUp = buildMeUp + punctuationMark.repeat(multiply) + " " + theWordArray[i]
        } else {
            buildMeUp = buildMeUp + " " + theWordArray[i]
        }

        console.log(buildMeUp)
    }

}

addExcitement(sentence, "?", 4)