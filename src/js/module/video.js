
const video = document.getElementById('video')

let play = document.querySelector('.play')
let vid = document.querySelectorAll('.main-slider__vid')
let btn = document.querySelectorAll('.main-slider__play')

play.addEventListener('click', function(event) {
    event.preventDefault()
    
    if(video.paused){
        video.play()
        video.setAttribute('controls', "controls")
        play.style.cssText = "opacity: 0"

    }else{
        play.style.cssText = "opacity: 1"
        video.pause()
    }
})

let btnArr = [...btn]
let vidArr = [...vid]

btnArr.map((i) => {
    i.addEventListener('click', function(event) {
        event.preventDefault()
        if(vidArr[i.id].paused){
            vidArr[i.id].play()
            vidArr[i.id].setAttribute('controls', "controls")
            i.style.cssText = "opacity: 0"
    
        }else{
            i.style.cssText = "opacity: 1"
            vidArr[i.id].pause()
        }
        
    })
})

