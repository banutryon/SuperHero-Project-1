$(() => {

  const loadPage = () => {
    $.ajax({
      url: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json",
      type: "GET",
    }).then(
      (data) => {
        // console.log(data);
        //==========Avengers=========================
        const heros = (data)
        heros.forEach((hero, i) => {
          let ga = hero.connections.groupAffiliation
          // source=====https://www.w3schools.com/JSREF/jsref_search.asp
          let teamAvengers = ga.search("Avengers")
          let heroName = hero.name

          //====Create an if statement to pull all the data I need====
          if (teamAvengers >= 0) {
            $(`<div>
            <div class= "popup-content">
            <div class= "img-hover-zoom">
            <button><img class="heroImg" src=${hero.images.sm} alt = "super"></button></div>
            <h3 class= "cardName">${hero.name}</h3>
            <p class= "name">${hero.name}</p>
            <p>Real Name: ${hero.biography.fullName}</p>
            <p class= "description">---Power Status---</p>
            <p>Intelligence: ${hero.powerstats.intelligence}</p>
            <p>Strength: ${hero.powerstats.strength}</p>
            <p>Combat: ${hero.powerstats.combat}</p>
            <p>Durability: ${hero.powerstats.durability}</p>
            <p class ="description">---Appearance---</p>
            <p>Gender: ${hero.appearance.gender}</p>
            <p>Height: ${hero.appearance.height}</p>
            <p>Weight: ${hero.appearance.weight}</p>
            <p class= "description">---Occuupation---</p>
            <p>${hero.work.occupation}</p>
            </div>
            </div>`).addClass('popup-overlay').attr('id', hero.id).appendTo('.avengContainer')
            //======create data for Modal===========
            const $pTag = $(`#${hero.id} p`).addClass('stats')
            const $btn = $(`#${hero.id} button`)
            const $hero = $(`#${hero.id}`)
            const $modal = $('#modal')
            //======create button click for Modal===========
            $($btn).on('click', () => {
              $modal.empty()
              $modal.append($hero.clone());
              $('#modal, #modal p').removeClass('stats')
              $('#modal h3').css("display", "none")
            })
            $($modal).on('click', () => {
              $modal.addClass('stats')
            })
            // console.log($modal);
          }
        })
      },
      (error) => {
        // console.log(error);
      }
    );
  }
  loadPage()

})
