window.onload = () => {
    
   const welcomeAppears = () => {
    return new Promise((resolve, reject) => {
        let index = 0;
        let welcomeArr = 'WELCOMEe'.split('');
    
        let timer = setInterval(() =>{
        let welcome = document.getElementById('welcome' + welcomeArr[index]);
        welcome.style.visibility = 'visible';
        let tween = KUTE.to(welcome, { fill: '#29B6F6' }).start();
        index++;
        if (index >= welcomeArr.length) {
            clearInterval(timer);
            resolve(timer);
         };
        }, 250)
    });
   };
   
   const linkedinAppears = () =>{
    return new Promise((resolve, reject) => {
        console.log('linkedin appearing');
        resolve();
    });
   }
   
   const sonyaAppears = () =>{
    return new Promise((resolve, reject) => {
        console.log('sonya appearing');
        resolve();  
    });
   };
   
   
   
   (async function() {
    await welcomeAppears();
    await linkedinAppears();
    await sonyaAppears();
    console.log('done')
  })(); 
    
}