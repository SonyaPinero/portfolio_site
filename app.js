window.onload = () => {
    //grab Times Square SVG from Object
    let times = document.getElementById('TimesSquare');
    let timesSVG = times.contentDocument.getElementById('timesSVG');
    
    //make Welcome appear
    let welcomeArr = 'WELCOME'.split('')
    let welcomeW = timesSVG.getElementById('welcomeW');
    
    welcomeArr.forEach((letter) => {
        timesSVG.getElementById('welcome' + letter).style.visibility = 'visible';
    })
    
    
}