const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const dynamicWelcome = document.querySelector('.dynamicWelcome')
if(isMorning){
    dynamicWelcome.textContent = 'Good Morning'
}
if(isAfternoon){
    dynamicWelcome.textContent = 'Good Afternoon'
}
if(isEvening){
    dynamicWelcome.textContent = 'Good Evening'
}