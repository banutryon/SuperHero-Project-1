$(() => {
  $("button").on("click", (e) => {
    event.preventDefault();
    // const userInput = $('input[type="text"]').val();

    $.ajax({
      url: `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json?=${$(event.target).val()}`,
      type: "GET",
    }).then(
      (data) => {
        console.log(data);


        //=================Heros for of=========================
        const heros = (data)
        heros.forEach((hero, i) => {
          let str = hero.connections.groupAffiliation
          let n = str.search("Avengers")
          // source=====https://www.w3schools.com/JSREF/jsref_search.asp
          if (n >= 0) {

            console.log(hero.name);
          }
        });


          // const $hName =
          // $('<dd>').addClass('heroName').text(data[i].name)
          // $('dt').append($hName);



        // const $name = $('<dt>').text('Name').appendTo('dl#info');
        // const $hName =
        // $('<dd>').addClass('heroName').text(data[i].name)
        // $('dt').append($hName);







      },
      (error) => {
        console.log(error);
      }
    );
  });








})




// ===============Bone Yard=====================
// for (let i = 0; i < 3; i++) {
//   // function list will pull the hero list and create a li and add it to a ul with the class list.
//////////////////Use this to creat only one line per name.
//   const $li = $(`<li>`).text(`${data[i].name}`).appendTo($('.container'))
///////////////////////////////////







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
