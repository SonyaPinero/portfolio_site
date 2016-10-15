window.onload = () => {
    
   const welcomeAppears = () => {
    return new Promise((resolve, reject) => {
        let index = 0;
        let welcomeArr = document.getElementById('welcomeText').getElementsByTagName('path');
        
        let timer = setInterval(() =>{
            let welcome = welcomeArr[index]
            welcome.style.visibility = 'visible';
            welcome.style.fill =  '#29B6F6'
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
            sonya.style.fill = '#DB7093'
            index++;
            if (index >= sonyaArr.length) {
                clearInterval(timer);
                resolve(timer);
            };
        }, 150)  
    });
   };
   
   const githubAppears = () =>{
    return new Promise((resolve, reject) => {
        let github = document.getElementById('githubIcon').getElementsByTagName('path')[0];
        github.style.visibility = 'visible';
        let tween = KUTE.to(github, { fill: '#4A235A' }).start();
        resolve(tween);
    });
   }
   
   const contactAppears = () =>{
    return new Promise((resolve, reject) => {
        resumeAppears()
        let index = 0;
        let contactArr = document.getElementById('contactText').getElementsByTagName('path');
        
        let timer = setInterval(() =>{
            let contact = contactArr[index]
            contact.style.visibility = 'visible';
            contact.style.fill = '#CB4335'
            index++;
            if (index >= contactArr.length) {
                clearInterval(timer);
                resolve(timer);
            };
        }, 250)  
    });
   };
   
   const resumeAppears = () =>{
        let index = 0;
        let resumeArr = document.getElementById('resumeText').getElementsByTagName('path');
        
        let timer = setInterval(() =>{
            let resume = resumeArr[index]
            resume.style.visibility = 'visible';
            resume.style.fill = '#CB4335'
            index++;
            if (index >= resumeArr.length) {
                clearInterval(timer);
            };
        }, 250)  
   };
   
    const letterDisappears = (letter) =>{
         letter.style.visibility = 'hidden';
   };
   
   const welcomeBannerMoves = (letters) =>{
        let tween = KUTE.to(letters, { translate: 60}, {duration: 2500}).start();
   };
   
   
   const welcomeBanner = () =>{
       return new Promise((resolve, reject) => {
        let  welcome = document.getElementById('welcomeText'); 
        let  welcomeArr = document.getElementById('welcomeText').getElementsByTagName('path'); 
        let index = welcomeArr.length - 1;
        let seconds = 50;
        
        welcomeBannerMoves(welcome);
        const letterTime = () => {
            seconds = seconds + 65;
            letterDisappears(welcomeArr[index]);
            index--;
            let timer = setTimeout(letterTime, seconds);
            if (index < 0){
                clearTimeout(timer)
                resolve(timer)
            }
        }

        setTimeout(letterTime, seconds);
        
       })
   };
   

   
   (async function() {
    await welcomeAppears();
    // await linkedinAppears();
    // await sonyaAppears();
    // await githubAppears();
    // await contactAppears();
    await welcomeBanner();
  })(); 
    
}