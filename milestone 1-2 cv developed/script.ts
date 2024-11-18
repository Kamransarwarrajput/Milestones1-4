const button1 = document.getElementById('btn-skill') as HTMLButtonElement
const skills = document.getElementById('skill') as HTMLElement


button1.addEventListener('click',()=>{

    if(skills.style.display === 'none'){
        skills.style.display = 'block'
    } 
    else{
    skills.style.display ='none'

    }

});