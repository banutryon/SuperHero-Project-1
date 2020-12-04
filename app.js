$(() => {
  $("form").on("submit", (e) => {
    event.preventDefault();
    const userInput = $('input[type="text"]').val();

		$.ajax({
			url:
				`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json?=${userInput}`,
			type: "GET",
		}).then(
			(data) => {
				console.log(data);
        // let [274] = userInput
        $('#hero').html(data[250].name);
        $('#powerstats').html(data[250].powerstats);
        $('#app').html(data[250].apperaranc);
        $('#bio').html(data[250].biography);
        $("#container").append(`<img src=${data[250].images.sm} alt={img}/>`)
        console.log(data[250].powerstats);



















			},
			// (error) => {
      //
			// }
		);
	});








})
