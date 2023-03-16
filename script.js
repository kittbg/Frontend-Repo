var submitButton = $("#submit");
const div = $("#results")


submitButton.on('click', function(){
$("#results").empty();
var userInput = $("input").val()

$.get(`https://rickandmortyapi.com/api/character/?name=${userInput}`,(data)=>{
   console.log(data.results)

//     console.log(data.results)
for (let i = 0; i < data.results.length; i++){
    console.log(data.results[i])
    let result = data.results[i]
  
    let newDiv = $(`
    <span class="card-body text-danger">
        <h1 class="card-title">${result.name}</h1>
        <img class="card-image" src=${result.image} />
        <div class="species" class="card-text">Species: ${result.species}</div>
        <div class="gender" class="card-text">Gender: ${result.gender}</div>
        <div class="origin" class="card-text">Origin: ${result.origin.name}</div>
        <div class="location" class="card-text">Location: ${result.location.name}</div>
    </span>
       `)
   div.append(newDiv)
 
    }   
  })
})


