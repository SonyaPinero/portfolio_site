import Snap from 'snapsvg'

window.onload = () => {
       Snap.load('/svg/TimesSquare.svg', (f) => {
           console.log(f)
       })
    
}