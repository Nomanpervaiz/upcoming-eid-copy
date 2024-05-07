setInterval( function timeLeft() {
    let currentdate = new Date()
    let upcomingEid = new Date ("17 june, 2024")
    let diff =  upcomingEid - currentdate 
    let eidDayLeft = diff/(1000*60*60*24)
    let eidHoursLeft = diff/(1000*60*60)
    let eidMinLeft = diff/(1000*60)
    let eidSecLeft = diff/(1000)
    let resultDay = `${Math.floor(eidDayLeft)}`
    let resultHr = `${Math.floor(eidHoursLeft)}`
    let resultMin = `${Math.floor(eidMinLeft)}`
    let resultSec = `${Math.floor(eidSecLeft)}`
    document.getElementById("box1").innerText = resultDay
    document.getElementById("box2").innerText = resultHr
    document.getElementById("box3").innerText = resultMin
    document.getElementById("box4").innerText= resultSec
})
// timeLeft()