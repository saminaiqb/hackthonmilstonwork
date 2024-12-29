const toggleButton= document.getElementById('toggle-skills') as HTMLButtonElement
const skills=document.getElementById("skills")as HTMLElement

toggleButton.addEventListener ('click',() =>{
    if (skills.style.display === 'non') {
        skills.style.display='block'
    } else{
        skills.style.display='non'
    }
});