// Let's store the elements which we will targeet

const createbutton = document.querySelector('.btn')
const notesContainer = document.querySelector('.notes-container')


createbutton.addEventListener('click', () =>{
    let input_box = document.createElement('p')
    let img = document.createElement('img')
    input_box.className = 'input-box'
    input_box.setAttribute('contenteditable', 'true')
    img.src = 'images/delete.png'

    notesContainer.appendChild(input_box).appendChild(img)

});



function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes')
}

showNotes()


function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML)
}


// Let's add the event listeners to img button

notesContainer.addEventListener('click', (e)=>{
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove()
        updateStorage()
    }

    else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box')

        notes.forEach((note) => {
            note.onkeyup = function (){
                updateStorage()
            }   
        })
    }
});


document.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
        document.execCommand('insertLineBreak')
        e.preventDefault()
    }
})