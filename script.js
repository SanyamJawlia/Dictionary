let word = document.getElementById("word");
let noun = document.getElementById("noun");
let definition = document.getElementById("definition");
let example = document.getElementById("example");
let button = document.getElementById("btn");
let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";


button.addEventListener("click" ,search = () =>{
    let inpword = document.getElementById("text-input").value;
    
    fetch(`${url}${inpword}`)
    .then(response => response.json())
    .then(data => {
        console.log(data[0]);
        word.innerText = data[0].word;
        noun.innerText = data[0].meanings[0].partOfSpeech;
        definition.innerText = data[0].meanings[0].definitions[0].definition;
        example.innerText = data[0].meanings[1].definitions[0].definition;
    });
}); 