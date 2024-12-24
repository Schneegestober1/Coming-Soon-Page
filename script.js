let countDownDate = new Date('Feb 20, 2025 00:00:00').getTime()

let x = setInterval(function(){
    let now = new Date().getTime()
    let distance = countDownDate - now

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    console.log(days)
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById('days').innerHTML = formatTime(days)
    document.getElementById('hours').innerHTML = formatTime(hours)
    document.getElementById('minutes').innerHTML = formatTime(minutes)
    document.getElementById('seconds').innerHTML = formatTime(seconds)

    if(distance < 0){
        clearInterval(x)
        document.getElementById('days').innerHTML = '00'
        document.getElementById('hours').innerHTML = '00'
        document.getElementById('minutes').innerHTML = '00'
        document.getElementById('seconds').innerHTML = '00'
        
    }
    
}, 1000)

function formatTime(unit){
    return unit < 10 ? '0' + unit : unit
}