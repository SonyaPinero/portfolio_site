window.onload = () => {
    
   const welcomeAppears = () => {
    return new Promise((resolve, reject) => {
        let index = 0;
        let welcomeArr = document.getElementById('welcomeText').getElementsByTagName('path');
        
        let timer = setInterval(() =>{
            let welcome = welcomeArr[index]
            welcome.style.visibility = 'visible';
            welcome.style.fill = '#29B6F6'
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
        let linkedin = document.getElementById('linkedinIcon').getElementsByTagName('path')[0];
        linkedin.style.visibility = 'visible';
        let tween = KUTE.to(linkedin, { fill: '#0077B5' }).start();
        resolve(tween);
    });
   }
   
   const sonyaAppears = () =>{
    return new Promise((resolve, reject) => {
        let index = 0;
        let sonyaArr = document.getElementById('sonyaText').getElementsByTagName('path');
        
        let timer = setInterval(() =>{
            let sonya = sonyaArr[index]
            sonya.style.visibility = 'visible';
            sonya.style.fill = '#CD5C5C'
            index++;
            if (index >= sonyaArr.length) {
                clearInterval(timer);
                resolve(timer);
            };
        }, 250)  
    });
   };
   
   const githubAppears = () =>{
    return new Promise((resolve, reject) => {
        let github = document.getElementById('githubIcon')
        github.style.visibility = 'visible';
        let tween = KUTE.to(github, { fill: 'purple' }).start();
        resolve(tween);
    });
   }
   
   (async function() {
    await welcomeAppears();
    await linkedinAppears();
    await sonyaAppears();
    await githubAppears();
  })(); 
    
}