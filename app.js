

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById('result')
const sound = document.getElementById('sound')
const btn = document.getElementById('search-btn')



btn.addEventListener('click', async() => {
    let inpWord = document.getElementById("inp-word").value;
    const res = await axios.get(`${url}${inpWord}`)
    let partOfSpeech = res.data[0].meanings[0].partOfSpeech;
    let phonetic = res.data[0].phonetic;
    let definition = res.data[0].meanings[0].definitions[0].definition
    let example = res.data[0].meanings[0].definitions[0].example || "";



    let pronounciationArray = res.data[0].phonetics;
    for (let i in pronounciationArray){
       
        sound.setAttribute("src", `${pronounciationUrl}`)
    }
    
      
    result.innerHTML = `
           <div class="word">
                <h3>${inpWord}</h3>
                <button onclick = "playSound()" >
                    <i class="fa fa-volume-up" aria-hidden="true"></i>
                </button>
            </div>
            <div class="details">
                <p>${partOfSpeech}</p>
                <p>${phonetic}</p>
            </div>
            <div class="word-definition">
                <p>${definition}</p>
            </div>
            <div class="word-example">
                <p>
                   ${example}
                </p>
            </div>
            `;
            
            
})

function playSound() {
    sound.play() || ""
}