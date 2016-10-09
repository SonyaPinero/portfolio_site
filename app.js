window.onload = () => {
    let welcomeArr = 'WELCOMEe'.split('');
    welcomeArr.forEach((letter) =>{
        let welcome = document.getElementById('welcome' + letter)
        welcome.style.visibility = 'visible'
        let tween = KUTE.to(welcome, { fill: '#29B6F6' }, {delay: 500});
        tween.start()
    })
    
    
    
    
}