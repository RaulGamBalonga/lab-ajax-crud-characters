const charactersAPI = new APIHandler("https://minions-api.herokuapp.com");

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(res => {
        const charactersUL = document.querySelector(".characters-container")
        console.log(res)

        let charactersInfo = ""
        res.data.reverse().forEach(character => {
          charactersInfo += `<div class="character-info">
            <div class="name">${character.name}</div>
            <div class="occupation">${character.occupation}</div>
            <div class="cartoon">${character.cartoon}</div>
            <div class="weapon">${character.weapon}</div>
          </div>`
        });

        charactersUL.innerHTML = charactersInfo
      })
      .catch(err => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
   const characterId = document.getElementById("eligeUno").value
    charactersAPI.getOneRegister(characterId)
      .then(res => {
        const charactersUL = document.querySelector(".character-info")
        console.log(res)

        const character = res.data

        let charactersInfo = `
            <div class="name">${character.name}</div>
            <div class="occupation">${res.data.occupation}</div>
            <div class="cartoon">${res.data.cartoon}</div>
            <div class="weapon">${res.data.weapon}</div>`
        

        charactersUL.innerHTML = charactersInfo
      })
      .catch(err => console.log(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    
      const characterId = document.getElementById("eliminaUno").value
      charactersAPI.deleteOneRegister(characterId)
        .then(res => {
          const charactersUL = document.querySelector(".characters-container")
          console.log(res)

          let charactersInfo = ""

          charactersInfo += `<div class="character-info">
            <div class="name">${res.data.name}</div>
            <div class="occupation">${res.data.occupation}</div>
            <div class="cartoon">${res.data.cartoon}</div>
            <div class="weapon">${res.data.weapon}</div>
          </div>`


          charactersUL.innerHTML = charactersInfo
        })
        .catch(err => console.log(err))
    });
  

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
   
      event.preventDefault()

    const inputs = document.querySelectorAll("#new-character-form input")

    const name = inputs[0].value
    const occupation = inputs[1].value
    const weapon = inputs[2].value
    const cartoon = inputs[3].checked
    

    charactersAPI.createOneRegister({name,occupation,weapon,cartoon})
        .then(res => {
          const charactersUL = document.querySelector(".characters-container")
          console.log(res)

          let charactersInfo = ""

          charactersInfo += `<div class="character-info">
            <div class="name">${res.data.name}</div>
            <div class="occupation">${res.data.occupation}</div>
            <div class="cartoon">${res.data.cartoon}</div>
            <div class="weapon">${res.data.weapon}</div>
          </div>`


          charactersUL.innerHTML = charactersInfo

        })
        .catch(err => console.log(err))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });
});
