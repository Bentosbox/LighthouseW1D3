function countletters(sentence) {
    var objectcounter = {} ;
    for (var i = 0; i < sentence.length; i++) {
        var letter = sentence[i];

        if (letter === " ") {
            continue;
        }

        if (objectcounter[letter] === undefined) {
            objectcounter[letter] = [i];
        } else {
            objectcounter[letter].push(i);
        }
    }
    return objectcounter;
  }

console.log(countletters("lighthouse is a house"));