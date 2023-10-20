const inputFile = document.getElementById('music');
const dadosMusic = document.querySelector('.nameMusic')
const duration = document.querySelector('.duration')
const btn = document.querySelector('.btn')
const spanAdd = document.getElementById('spanAdd')
const todosBtn = document.querySelectorAll('button')
const volumeRange = document.getElementById('volumeRange')
let rotationInteval






const rotation = ()=>{
    const elemento = document.querySelector('.areaLogo')
    rotationInteval = setInterval(()=>{
        let rotation = getComputedStyle(elemento).getPropertyValue('--rotation') || 0;
        rotation = parseInt(rotation, 10);
        rotation += 1;
        elemento.style.setProperty('--rotation', rotation);
        elemento.style.transform = `rotate(${rotation}deg)`;
    },10)
}



inputFile.addEventListener('change' , (e)=>{
    const inputTarge = e.target
    const file = inputTarge.files[0]
    const btnPause = document.querySelector('#pause')
    

    if(file){
        dadosMusic.innerHTML = file.name
        const url = URL.createObjectURL(file)
        const audio = new Audio(url)

        const ajustandoVolume = () =>{
            const volumeValue = parseFloat(volumeRange.value) / 100;
             audio.volume = volumeValue
        }
        volumeRange.addEventListener('input' , ajustandoVolume)
        
        audio.addEventListener('loadedmetadata' , ()=>{
            const minutos = Math.floor(audio.duration / 60)
            const segundos = Math.floor(audio.duration % 60)
            duration.innerHTML = `${minutos}:${segundos}`
        })
        btn.addEventListener('click' , ()=>{
            audio.play()
            btn.style.display ='none'
            btnPause.style.display='flex'
            rotation()
        })
        btnPause.addEventListener('click' , ()=>{
            audio.pause()
            btnPause.style.display ='none'
            btn.style.display ='flex'

            clearInterval(rotationInteval)
        })
        inputFile.disabled = true
        spanAdd.classList.add('spanAdd')
    }else{
        console.log('Adicione um Arquivo')
    }
})