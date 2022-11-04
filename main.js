function createGame(group, player, hour, player2) {
    return `
    <p>${group}</p>  
    <li>                    
        <img src="./assets/${player}.svg" alt="Bandeira do ${player}">
            <strong>${hour}</strong>   
        <img src="./assets/${player2}.svg" alt="Bandeira da ${player2}">
           
    </li><hr>
   `
}

let delay = -0.4;

function createCard(date, day, games) {
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
createCard("20/11", "Domingo", createGame("Grupo A","qatar", "13:00", "ecuador")) + 

createCard("21/11", "segunda", createGame("Grupo B","england", "10:00", "iran") + createGame("Grupo A","senegal", "13:00", "netherlands")+ createGame("Grupo B", "united states", "16:00", "wales")) + 

createCard("22/11", "Terça",createGame("Grupo C","argentina", "07:00", "saudi arabia") + createGame("Grupo D","denmark", "10:00", "tunisia") +createGame("Grupo C","mexico", "13:00", "poland") +createGame("Grupo D","france", "16:00", "australia")) +

createCard("23/11", "Quarta",createGame("Grupo F","morocco", "07:00", "croatia") + createGame("Grupo E","germany", "10:00", "japan") +createGame("Grupo E","spain", "13:00", "costa rica") + createGame("Grupo F","belgium", "16:00", "canada")) +

createCard("24/11", "Quinta",createGame("Grupo G","switzerland", "07:00", "cameroon") + createGame("Grupo H","uruguay", "10:00", "south korea") +createGame("Grupo H","portugal", "13:00", "ghana") + createGame("Grupo G","brazil", "16:00", "serbia")) +

createCard("25/11", "Sexta",createGame("Grupo B","wales", "07:00", "iran") + createGame("Grupo A","qatar", "10:00", "senegal") +createGame("Grupo A","netherlands", "13:00", "ecuador") + createGame("Grupo B","england", "16:00", "united states")) 



document.getElementById('radio-yellow').addEventListener('click', function() {
    document.querySelector('body').setAttribute('class', "yellow");
})
document.getElementById('radio-blue').addEventListener('click', function() {
    document.querySelector('body').setAttribute('class', "blue");
})
document.getElementById('radio-green').addEventListener('click', function() {
    document.querySelector('body').setAttribute('class', "green");
})
