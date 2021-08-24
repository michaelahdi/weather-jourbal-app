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
};

// post route to send data
const postData = async (url = '' , info = {})=>{
    // fetch function take two parameters the url tobe added and the data tobe added under post method
    // giving it both headers and body because of post methos
    const res = await fetch(url,{
        method : post,
        headers : {
            "content-type":"application/json"
        },
        body : json.stringify(info),
    });
    // if all data correct
    try{
        // transform the data returned to json
const newData = await res.json();
return newData
    }//something wrong
    catch(error){
        console.log(error);
    }
}
// updating UI
const updatingUI = async ()=>{
    const res = await fetch(server + '/all');
    try{
const savedData = await res.json();

document.getElementById("date").innerHTML = savedData.newDate
document.getElementById("city").innerHTML = savedData.city
document.getElementById("temp").innerHTML = savedData.temp
document.getElementById("discription").innerHTML = savedData.description
document.getElementById("content").innerHTML = savedData.feeling
    }catch(error){
        console.log(error)
    }
}
