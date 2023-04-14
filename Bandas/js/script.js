const likes = document.querySelectorAll('.like')
const plays = document.querySelectorAll('.start')
const musicas = document.querySelectorAll('.musica')

likes.forEach((like) => {
      like.addEventListener('click', (e) => {
            let style = e.currentTarget.classList
            if(style.contains('desativado')){
                  like.setAttribute('src', '../img/icons/like.svg')
                  like.classList = 'like ativado'
            }
            else{
                  like.setAttribute('src', '../img/icons/deslike.svg')
                  like.classList = 'like desativado'
            }
      })
})

function pausar(){
      let b = document.querySelectorAll('.off')
      for (let i = 0; i < plays.length; i++) {
            b[i].pause()
            plays[i].setAttribute('src', '../img/icons/play.svg')
      }
}

plays.forEach((comecar) => {
      comecar.addEventListener('click', (e) => {
            let style = e.currentTarget
            let audio = comecar.id
            let a = document.querySelector(`.${audio}`)
            pausar()
            console.log(a)
            if(style.classList.contains('desativado')){
                  comecar.setAttribute('src', '../img/icons/pause.svg')
                  comecar.classList = 'start ativado'
                  a.play()
            }
            else{
                  comecar.setAttribute('src', '../img/icons/play.svg')
                  comecar.classList = 'start desativado'
                  a.pause()
            }

            
      })
})



// function playSound(musica){
//       let sound = document.querySelector(`#${musica}`)
//       if(!tocando){
//             sound.play()
//             tocando = true
//       }
//       else{
//             sound.pause()
//             tocando = false
//       }
// }