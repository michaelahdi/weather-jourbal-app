/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
// setup apikey to link to openweathermap web 
const apiKey = "&appid=9424b92c045f11c54f9de89f9147d73d&units=imperial" ;
//setting url to get the information from openweather map
const baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=`
// incase of error input
const error = document.getElementById('error');
// function to get the input data
const generateData = function(){
    const zip = document.getElementById('zip').value
    const feeling = document.getElementById('feelings').value

    // using promise to get the data
    getWeatherData(zip).then((data)=>{
        if(data){
            const{
                main : {temp},
                name : city ,
                weather : [{description}],
            } = data
            const info = {
                newDate,
                city,
                temp : Math.round(temp),
                description,
                feeling
            }
            postData(server + '/add' + info);
            updatingUI();
            document.getElementById('entry').style.opacity = 1;
        }
    });
}

// add event listener to get the input data when the user click the button
document.getElementById('generate').addEventListener('click', generateData);

//get api data by using asynchronous js 
const getWeatherData = async(zip)=>{
    // if all data is true apply try 
    try{
        const res = await fetch(baseURL + zip + apiKey);
        // transform the response we get to json 
        const data = await res.json()
        return data
    }// if something wrong apply catch 
    catch(error){
        console.log(error)
    }
}
