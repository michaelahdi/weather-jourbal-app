# Weather-Journal App Project
** the main purpose of the project is to get the temprature in a certain zipcode and letting the user to get a breif about that temp. , date and real feelings ,
** to acheive that we will need :
   -build the structure of the page we want to use by HTML
   -add some styling to that structure by CSS 
   - use JS to add dynamics to the page
   - use external website like OpenWeatherMap.com which allow API
   -use node js to  install some midddlewer like json and cors
## front-end (client side):
** Getting an API key from the OpenWeatherMap.com , through using asynchronous JS and DOM we add this key so the user can get the temprature and date .

** through DOM  , we can get the value entered in zipcode , and through the API we can get the temprature in linked area to that zipcode after clicking event through the asynch Js.

** using JSON we retrieve the data(resulting from the bove ) in the form of object so we can extract the temprature .
** using post route to add endpoint to our page under asynch function 
** using get route to retrieve the data added 
** using DOM to add the data from above to our page 
## back-end(server-side):
** setting local port to use as localhost to our page &  linking it to the page files
**setting the data added by post route in the client side to be as an object added to the body 
** using get route to retrieve that data
