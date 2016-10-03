window.onload = () => {
    let welcome = document.getElementById('welcomeW')
    welcome.style.visibility = 'visible'
    let tween = KUTE.to('#welcomeW', { fill: 'red' });
    tween.start()
}