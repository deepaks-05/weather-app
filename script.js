const API_KEY="your-api-key";
const url="url";

let weatherImg=document.querySelector('.weather-img');
let cityName=document.querySelector('.name');
let temp=document.querySelector('.temp');
let humidity=document.querySelector(".humidity-percentage");
let wind=document.querySelector('.wind-speed');
let weatherCard=document.querySelector(".weather-info");
let btn=document.querySelector("button");
let input=document.querySelector('input');
btn.addEventListener("click",()=>{
  getWeather(input.value);
  input.value="";
})

function updateUI(data){
    cityName.textContent= data.name;
    temp.textContent=Math.round(data.main.temp)+"°C";
    humidity.textContent=data.main.humidity+"%";
    wind.textContent=data.wind.speed+"km/h";

    let type=data.weather[0].main;

    if(type=="Clear"){
        weatherImg.src="images/clear.png";
    }
    else if(type=="Clouds"){
        weatherImg.src="images/clouds.png";
    }
    else if(type=="Drizzle"){
        weatherImg.src="images/drizzle.png";
    }
    else if(type=="Mist"){
        weatherImg.src="images/mist.png";
    }
    else if(type=="Rain"){
        weatherImg.src="images/rain.png";
    }
    else if(type=="Snow"){
        weatherImg.src="images/snow.png";
    }

    weatherCard.classList.remove('hidden');
    


}

async function getWeather(city){
    if(city.trim()==""){
        alert("Enter a valid City");
        return;
    }
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    if(response.status==404){
        alert("Enter valid City");
    }
    else{
        const data=await response.json();
        updateUI(data);
    }


}

