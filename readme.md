**How the app works**
Click on the image to display a modal of the super hero stats
When looking at my Project Please use app.js / style.css / index.html
The other files are copies and are not the working project.

**My PSEUDOCODE for JS**

1. create a window on-load

2. create an ajax method that pulls the data from the superhero api

3. create a function to have a on-load of the api file within the ajax method. Put this function above the ajax method and make sure to wrap all content until you call the load page.

4. create a function for the heros data use this function to to create a forEach. I used a forEach method due to the API being build out with arrays.

5. I found the search method using w3 schools and applied it to only pull avengers. My goal was to have button clicks to pull avengers, the spider verse, and x-men but after looking over my API I realized that it lacked consistency on calling each affiliation so I decided to just do the avengers.

6. Create a if statement to allow  all of the Avengers to pull data independentlyIn the section I was able to get some help from Leland to understanding a different way to use an if statement.
In this method I created a div with the class of popup-overlay " this is one of the class names I will use for my modal"
Inside of this div will live all the information I need for my modal.
I also created another div with the class name popup-content. This is the main class to provide my button clicks with the content they need.
7. in the div with class popup-content create a button with an img inside of it.
Using String interpolation I am able to attach the photos from the API to the button.

8. using String interpolation again I am able to attach all of my stats to p tags

9. I also used a few different methods to add classes to show I understand different ways to do this.

10. create functions for Modal

11. use functions created to create button clicks.
Add clone function to allow the modal to pop up the data needed without taking away the images behind it.
Add remove class 'status' to take away the display none I have added to this class in CSS.
12. Create another button click that adds the class back to make the modal disappear.
