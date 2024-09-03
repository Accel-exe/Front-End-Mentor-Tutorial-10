const daily = document.getElementById('daily');
const weekly = document.getElementById('Weekly');
const monthly = document.getElementById('Monthly');

const workHrs = document.getElementById('workHrs');
const workLast = document.getElementById('workLast');
const playHrs = document.getElementById('playHrs');
const playLast = document.getElementById('playLast');
const studyHrs = document.getElementById('studyHrs');
const studyLast = document.getElementById('studyLast');
const exerciseHrs = document.getElementById('exerciseHrs');
const exerciseLast = document.getElementById('exerciseLast');
const socialHrs = document.getElementById('socialHrs');
const socialLast = document.getElementById('socialLast');
const selfHrs = document.getElementById('selfHrs');
const selfLast = document.getElementById('selfLast');



daily.addEventListener("click",(evt)=>{
    workD();
    playD();
    studyD();
    exerciseD();
    socialD();
    selfD();
})

weekly.addEventListener("click",(evt)=>{
    workW();
    playW();
    studyW();
    exerciseW();
    socialW();
    selfW();
})

monthly.addEventListener("click",(evt)=>{
    workM();
    playM();
    studyM();
    exerciseM();
    socialM();
    selfM();
})







const workD = () =>{
    workHrs.innerHTML = "5hrs";
    workLast.innerHTML = "Last Day - 7hrs";
}

const workW = () =>{
    workHrs.innerHTML = "32hrs";
    workLast.innerHTML = "Last Week - 36hrs";
}

const workM = () =>{
    workHrs.innerHTML = "103hrs";
    workLast.innerHTML = "Last Month - 128hrs";
}

const playD = () =>{
    playHrs.innerHTML = "1hr";
    playLast.innerHTML = "Last Day - 2hrs";
}

const playW = () =>{
    playHrs.innerHTML = "10hrs";
    playLast.innerHTML = "Last Week - 8hrs";
}

const playM = () =>{
    playHrs.innerHTML = "23hrs";
    playLast.innerHTML = "Last Month - 29hrs";
}

const studyD = () =>{
    studyHrs.innerHTML = "0hrs";
    studyLast.innerHTML = "Last Day - 1hr";
}

const studyW = () =>{
    studyHrs.innerHTML = "4hrs";
    studyLast.innerHTML = "Last Week - 7hrs";
}

const studyM = () =>{
    studyHrs.innerHTML = "13hrs";
    studyLast.innerHTML = "Last Month - 19hrs";
}

const exerciseD = () =>{
    exerciseHrs.innerHTML = "1hr";
    exerciseLast.innerHTML = "Last Day - 1hr";
}

const exerciseW = () =>{
    exerciseHrs.innerHTML = "4hrs";
    exerciseLast.innerHTML = "Last Week - 5hrs";
}

const exerciseM = () =>{
    exerciseHrs.innerHTML = "11hrs";
    exerciseLast.innerHTML = "Last Month - 18hrs";
}

const socialD = () =>{
    socialHrs.innerHTML = "1hr";
    exerciseLast.innerHTML = "Last Day - 1hr";
}

const socialW = () =>{
    socialHrs.innerHTML = "5hrs";
    exerciseLast.innerHTML = "Last Week - 10hrs";
}

const socialM = () =>{
    socialHrs.innerHTML = "21hrs";
    socialLast.innerHTML = "Last Month - 23hrs";
}

const selfD = () =>{
    selfHrs.innerHTML = "0hrs";
    selfLast.innerHTML = "Last Day - 1hr";
}

const selfW = () =>{
    selfHrs.innerHTML = "2hrs";
    selfLast.innerHTML = "Last Week - 2hrs";
}

const selfM = () =>{
    selfHrs.innerHTML = "7hrs";
    selfLast.innerHTML = "Last Month - 11hrs";
}