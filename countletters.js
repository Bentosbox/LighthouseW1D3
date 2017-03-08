// function countletters(sentence){
//     var omgisthereashortermethod = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     var objectcounter = {} ;

//     for (var x = 0; x < omgisthereashortermethod.length; x++) {
//         var letter = omgisthereashortermethod[x];
//         var count = lettercount(sentence, letter);
//         if (count > 0) {
//         objectcounter[letter] = count;
//         }
//     }

//     return objectcounter;
// }

// function lettercount(word, numChar) {
//     var start = 0;
//     for (var i = 0; i < word.length; i++) {
//         if (word[i] === numChar) {
//           start ++;
//         }
//     }
//     return start;
// }


// console.log(countletters("lighthouse is a house"));

// Code Version 3.0

function countletters(sentence) {
    var objectcounter = {} ;
    for (var i = 0; i < sentence.length; i++) {
        var letter = sentence[i];

        if (letter === " ") {
            continue;
        }

        if (objectcounter[letter] === undefined) {
            objectcounter[letter] = 1;
        } else {
            objectcounter[letter] = objectcounter[letter] + 1;
        }
    }
    return objectcounter;
  }

// console.log(countletters("lighthouse is a house"));

