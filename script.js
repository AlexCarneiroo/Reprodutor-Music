const inputFile = document.getElementById('music');
const dadosMusic = document.querySelector('.nameMusic')
const duration = document.querySelector('.duration')
const btn = document.querySelector('.btn')
const spanAdd = document.getElementById('spanAdd')
const todosBtn = document.querySelectorAll('button')
todosBtn.forEach(botao => {
    botao.addEventListener('click' , ()=>{
        let timerOut;

        if(botao.classList.contains('teste')){
            clearTimeout(timerOut)
        }else{
            botao.classList.add('teste')
            timerOut = setTimeout(()=>{
                botao.classList.remove('teste')
            },1000)
        }
    })
})

inputFile.addEventListener('change' , (e)=>{
    const inputTarge = e.target
    const file = inputTarge.files[0]
    const btnPause = document.querySelector('#pause')
    if(file){
        dadosMusic.innerHTML = file.name
        const url = URL.createObjectURL(file)
    
        const audio = new Audio(url)
        
        audio.addEventListener('loadedmetadata' , ()=>{
            const minutos = Math.floor(audio.duration / 60)
            const segundos = Math.floor(audio.duration % 60)
            duration.innerHTML = `${minutos}:${segundos}`
        })
        btn.addEventListener('click' , ()=>{
            audio.play()
            btn.style.display ='none'
            btnPause.style.display='flex'
        })
        btnPause.addEventListener('click' , ()=>{
            audio.pause()
            btnPause.style.display ='none'
            btn.style.display ='flex'
        })
        inputFile.disabled = true
        spanAdd.classList.add('spanAdd')
    }else{
        console.log('Adicione um Arquivo')
    }
})