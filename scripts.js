function toCapitalise() {

    paragraph = document.getElementById("floatingTextarea").value

    console.log(paragraph)

    paraInUppercase = paragraph.toUpperCase()

    console.log(paraInUppercase)

    document.getElementById("result").innerHTML = paraInUppercase
}

function countVowels() {

    paragraph = document.getElementById("floatingTextarea").value

    count = 0;
    for (i = 0; i < paragraph.length; i++) {
        if (
            paragraph[i] == "a" ||
            paragraph[i] == "e" ||
            paragraph[i] == "i" ||
            paragraph[i] == "o" ||
            paragraph[i] == "u" ||
            paragraph[i] == "A" ||
            paragraph[i] == "E" ||
            paragraph[i] == "I" ||
            paragraph[i] == "O" ||
            paragraph[i] == "U"
        ) {
            count++;
        }
    }

    document.getElementById("result").innerHTML = "Count of vowels : " + count;
}
function tosmall() {
    paragraph = document.getElementById("floatingTextarea").value

    console.log(paragraph)

    paraInLowerCase = paragraph.toLowerCase()

    console.log(paraInLowerCase)

    document.getElementById("result").innerHTML = paraInLowerCase
}
function countSpaces() {
    let count = 0;
    paragraph = document.getElementById("floatingTextarea").value

    for (let i = 0; i < paragraph.length; i++) {
        if (paragraph[i] === " ") {
            count++;
        } else {

        }
    }
    document.getElementById("result").innerHTML = "Count of Spaces : " + count;
}
function replacewithhyphens() {
    paragraph = document.getElementById("floatingTextarea").value

    console.log(paragraph)
    Text = paragraph.replaceAll(" ", "-");
    console.log(Text)

    document.getElementById("result").innerHTML = Text
}

function convertTitleCase() {
    

      let paragraph = document.getElementById("floatingTextarea").value;
      let words = paragraph.toLowerCase().split(" ");
      let titleCase = "";

      for (let i = 0; i < words.length; i++) {
        titleCase +=
          words[i].charAt(0).toUpperCase() +
          words[i].slice(1) + " ";
      }

      document.getElementById("result").innerHTML = titleCase.trim();
    }