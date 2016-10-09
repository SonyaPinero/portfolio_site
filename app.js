window.onload = () => {
    
   function welcomeAppears(){
    return new Promise((resolve, reject) => {
        let index = 0;
        let welcomeArr = 'WELCOMEe'.split('');
    
        let timer = setInterval(() =>{
        let welcome = document.getElementById('welcome' + welcomeArr[index])
        welcome.style.visibility = 'visible'
        let tween = KUTE.to(welcome, { fill: '#29B6F6' }).start();
        index++
        if (index >= welcomeArr.length) {
            clearInterval(timer);
            resolve(timer)
         }
        }, 250)
    })
   }
   
   (async function() {
    await welcomeAppears();
    console.log('done')
  })(); 
    
}