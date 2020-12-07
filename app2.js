$(() => {
  $("form").on("click", (e) => {
    e.preventDefault();
    // const userInput = $('input[type="text"]').val();

    $.ajax({
      url: `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json?=${$(event.target).val()}`,
      type: "GET",
    }).then(
      (data) => {
        console.log(data);

        //==========Avengers=========================
        const heros = (data)
        heros.forEach((hero, i) => {
          let ga = hero.connections.groupAffiliation
          let teamAvengers = ga.search("Avengers")
          // source=====https://www.w3schools.com/JSREF/jsref_search.asp
          if (teamAvengers >= 0) {
            $(`<div>
            <div class= "popup-content">
            <button><img src=${hero.images.sm} alt = "super"></button>
            <p> Name:  ${hero.name}</p>
            <p>Intelligence: ${hero.powerstats.intelligence}</p><p>Strength: ${hero.powerstats.strength}</p><p>Combat: ${hero.powerstats.combat}</p>
            <p>Full Name: ${hero.biography.fullName}</p>
            </div>
            </div>`).addClass('popup-overlay').attr('id', hero.id).appendTo('.avengContainer')
            // const $pTag = $('p').addClass('stats')
            const $pTag = $(`#${hero.id} p`).addClass('stats')
            const $btn = $(`#${hero.id} button`)
            const $hero = $(`#${hero.id}`)
            const $modal = $('#modal')
            $($btn).on('click', (e) => {
              $modal.empty()
              $modal.append($hero.clone());
              $('#modal, #modal p').removeClass('stats')
              })
            $($modal).on('click', (e) => {
              $modal.addClass('stats')
                })

          


            // console.log(hero.name);
          }

        })
      },
      (error) => {
        console.log(error);
      }
    );
  });


})



//
// $($btn).on('click', (e) => {
//   $pTag.toggleClass();
//   e.preventDefault();
//   })




// ===============Bone Yard=====================
// let $btn = $('#btn')
// $($btn).on('click', (event) => {
//   $pTag.toggleClass('.stats');
//   })

//=================Xmen=========================
//   let ga1 = hero.connections.groupAffiliation
//   let teamXmen = ga1.search("X-Men")
//   // source=====https://www.w3schools.com/JSREF/jsref_search.asp
//   if (teamXmen >= 0) {
//     $(`<div>
//     <img src=${hero.images.sm} alt = "super">
//     <p> Name:  ${hero.name}</p>
//     <p>Intelligence: ${hero.powerstats.intelligence}</p><p>Strength: ${hero.powerstats.strength}</p><p>Combat: ${hero.powerstats.combat}</p>
//     <p>Full Name: ${hero.biography.fullName}</p>
//     </div>`).appendTo('.avengContainer')
//
//
// };
//=================Xmen=========================


// for (let i = 0; i < 3; i++) {
//   // function list will pull the hero list and create a li and add it to a ul with the class list.
//////////////////Use this to creat only one line per name.
//   const $li = $(`<li>`).text(`${data[i].name}`).appendTo($('.container'))
///////////////////////////////////

// const $hName =
// $('<dd>').addClass('heroName').text(data[i].name)
// $('dt').append($hName);



// const $name = $('<dt>').text('Name').appendTo('dl#info');
// const $hName =
// $('<dd>').addClass('heroName').text(data[i].name)
// $('dt').append($hName);





// (data[keys[3]])
// keys = Object.keys(data[0])
// console.log(keys)
// let [274] = userInput



// $("form").on("submit", (e) => {
//   event.preventDefault();
//   const userInput = $('input[type="text"]').val();
//
//   $.ajax({
//     url: `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json?=${userInput}`,
//     type: "GET",
//   }).then(
//     (data) => {
//       console.log(data);
