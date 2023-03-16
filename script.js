import * as THREE from 'https://unpkg.com/three/build/three.module.js';

var submitButton = $("#submit");
const div = $("#results")

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


submitButton.on('click', function(){
$("#results").empty();
var userInput = $("input").val()

$.get(`https://rickandmortyapi.com/api/character/?name=${userInput}`,(data)=>{
//    console.log(data.results)



for (let i = 0; i < data.results.length; i++){
  
    let result = data.results[i]
    // console.log(result.episode)

let all = result.episode.slice(0, -1)
console.log(result.episode.slice(0, -1))
    $.get(all, (episode)=> {
        

    let newDiv = $(`
    <div class="card border-danger mb-3 bg-dark-subtle" style="max-width: 18rem;">
        <div class="card-body text-danger">
        <h1 class="card-header">${result.name}</h1>
        <img class="card-image" src=${result.image} />
        <div class="species" class="card-text">Species: ${result.species}</div>
        <div class="gender" class="card-text">Gender: ${result.gender}</div>
        <div class="origin" class="card-text">Origin: ${result.origin.name}</div>
        <div class="status" class="card-text">Status: ${result.status}</div>
        <div class="location" class="card-text">Location: ${result.location.name}</div>
        <div class="episode" class="card-text">Episode: ${episode.name}</div> 
        <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="${episode.name}" aria-describedby="popover6159">Episodes</button>
        </div>
       </div> 
       `)

       const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
       const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

       newDiv.find('.card-image').on('click', function() {
        const listener = new THREE.AudioListener();
        const audioLoader = new THREE.AudioLoader();
        const sound = new THREE.PositionalAudio(listener);
    
        
        const randomIndex = Math.floor(Math.random() * 15) + 1; 
        const audioFile = `Audio/audio${randomIndex}.mp3`;
        audioLoader.load(audioFile, function(buffer) {
            sound.setBuffer(buffer);
            sound.setLoop(false);
            sound.setVolume(0.5);
            sound.play();
        });
    });


   div.append(newDiv)
 
     }) 
    }  
  

  })
})


 

