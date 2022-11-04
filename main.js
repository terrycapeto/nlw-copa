function createGame(player, hour, player2){
   return`
   <li>            
                            <img src="./assets/${player}.svg" alt="Bandeira do ${player}">
                            <strong>${hour}</strong>   
                            <img src="./assets/${player2}.svg" alt="Bandeira da ${player2}">        
                        </li>
   `
}



let delay = -0.4;

function createCard(date, day, games){
    delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
                    <h2>${date}<span>${day}</span></h2>
                    <ul>
                        ${games}                 
                    </ul>
                </div>
  `
}

document.querySelector("#cards").innerHTML = 

createCard("28/11","sexta",createGame("yemen","16:00","serbia") + createGame("brazil","16:00","serbia")) +
createCard("14/11","segunda",createGame("brazil","16:00","serbia")) +
createCard("14/11","segunda",createGame("brazil","16:00","serbia"))


document.getElementById('radio-yellow').addEventListener('click', function(){
    document.querySelector('body').setAttribute('class',"yellow");
})

document.getElementById('radio-blue').addEventListener('click', function(){
    document.querySelector('body').setAttribute('class',"blue");
})

document.getElementById('radio-green').addEventListener('click', function(){
    document.querySelector('body').setAttribute('class',"green");
})


