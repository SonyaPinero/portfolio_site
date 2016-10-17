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
        }, 125)  
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
   
   const letterAppears = (letter) =>{
         letter.style.visibility = 'visible';
   };
   
   const welcomeBannerMoves = (letters) =>{
        let tween = KUTE.to(letters, { translate: 60}, {duration: 2500}).start();
   };
   
   const welcomeBannerResets = (letter) =>{
        let tween = KUTE.to(letter, { translate: [0, -10]}, {duration: 1000}).start();
        tween = KUTE.to(letter, { translate: -90}, {duration: 1000}).start();
   };
   
   const welcomeBannerReturns = () =>{
        return new Promise((resolve, reject) => {
        let  welcome = document.getElementById('welcomeText'); 
        let  welcomeArr = document.getElementById('welcomeText').getElementsByTagName('path'); 
        let index = welcomeArr.length - 1;
        let seconds = 275;
        
        let tween = KUTE.to(welcome, { translate: 90}, {duration: 2500}).start();
        const letterTime = () => {
            seconds = seconds + 40;
            letterAppears(welcomeArr[index]);
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
            welcomeBannerResets(welcomeArr[index]);
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
   
   
   const lightUp = (el) => {
        let  element = document.getElementById(el); 
        element.style.stroke = 'gold';
        element.setAttribute('stroke-width', 3);
        element.setAttribute('stroke-opacity', 0.4);
        if (el === 'contactRect'){
            lightUp('resumeRect')
        }
   }
   
   const lightUpTheSquare = () =>{
       return new Promise((resolve, reject) =>{ 
        let index = 0;
        let rectArr = ['welcomeRect', 'linkedinRect', 'sonyaRect','githubRect','contactRect'];
    
        let timer = setInterval(() =>{
            lightUp(rectArr[index]);
            index++;
            if (index >= rectArr.length) {
                clearInterval(timer);
                resolve(timer);
            };
        }, 250);
      })
   };
   
   const contactBannerMoves = (letters) =>{
        let tween = KUTE.to(letters, { translate: [0, 115]}, {duration: 2500}).start();
   };
   
   const resumeBannerMoves = (letters) =>{
        let tween = KUTE.to(letters, { translate: [0, -110]}, {duration: 2500}).start();
   };
   
    const contactBanner = () =>{
        return new Promise((resolve, reject) =>{
            let contact = document.getElementById('contactText'); 
            let contactArr = document.getElementById('contactText').getElementsByTagName('path');
            let index = contactArr.length - 1;
            let seconds = 50; 
            
            contactBannerMoves(contact);
            const letterTime = () => {
            seconds = seconds + 80;
            letterDisappears(contactArr[index]);
            index--;
            let timer = setTimeout(letterTime, seconds);
            if (index < 0){
                clearTimeout(timer)
                resolve(timer)
            }
        }
            setTimeout(letterTime, seconds);
        })
   }
    
    const resumeBanner = () =>{
        return new Promise((resolve, reject) =>{
            let resume = document.getElementById('resumeText'); 
            let resumeArr = document.getElementById('resumeText').getElementsByTagName('path');
            let index = 0;
            let seconds = 50; 
            
            resumeBannerMoves(resume);
            const letterTime = () => {
            seconds = seconds + 120;
            letterDisappears(resumeArr[index]);
            index++;
            let timer = setTimeout(letterTime, seconds);
            if (index >= resumeArr.length){
                clearTimeout(timer)
                resolve(timer)
            }
        }
            setTimeout(letterTime, seconds);
        })
    }
   
   (async function() {
    await welcomeAppears();
    // await linkedinAppears();
    // await sonyaAppears();
    // await githubAppears();
    // await contactAppears();
    // await lightUpTheSquare();
    await welcomeBanner();
    await welcomeBannerReturns();
    // await contactBanner();
    // await resumeBanner();
  })(); 
    
}