  const searchBar = $('#search')
  let avengersList = []
$(() => {


  const loadPage = () => {
    $.ajax({
      url: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json",
      type: "GET",
    }).then(
      (data) => {
        console.log(data);

        //==========Avengers=========================
        // const heros = (data)
        searchBar.on('keyup', (event) => {
          const userInput = event.target.value
          console.log(userInput);
          avengersList.filter((hero) => {
            return hero.name.includes(userInput)
          })
        })
        const displayHeros = () => {
           avengersList = data.map((hero) => {
            return $(`<div>
            <div class= "popup-content">
            <div class= "img-hover-zoom">
            <button><img class="heroImg" src=${hero.images.sm} alt = "super"></button></div>
            <p class= "name">${hero.name}</p><p>Real Name: ${hero.biography.fullName}</p>
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
            </div>`)

          }
          ).join(' ')
          avengersList.innerHTML = htmlString

          console.log(searchBar);
        }





          //====Create an if statement to pull all the data I need====


            //======create vars===========
            // let ga = hero.connections.groupAffiliation
            // let teamAvengers = ga.search("Avengers")
            // let heroName = hero.name
            // const $pTag = $(`#${hero.id} p`).addClass('stats')
            // const $btn = $(`#${hero.id} button`)
            // const $hero = $(`#${hero.id}`)
            // const $modal = $('#modal')
            //======create button click for Modal===========
            // $($btn).on('click', (e) => {
            //   $modal.empty()
            //   $modal.append($hero.clone());
            //   $('#modal, #modal p').removeClass('stats')
            // })
            // $($modal).on('click', (e) => {
            //   $modal.addClass('stats')
            // })
            // console.log(hero.name);



        // console.log(name)




        displayHeros()


      },
      (error) => {
        console.log(error);
      }
    );
  }


  // });
  loadPage()

  // });

})
