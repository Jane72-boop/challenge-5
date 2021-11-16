const arrow = document.querySelectorAll('.arrow');

arrow.forEach(item => {item.addEventListener('click', e => {

    console.log(arrow[1].parentNode.parentNode.children[0].children[0].classList)

    for(let i = 0; i < arrow.length; i++) {
        if (arrow[i].classList.contains('flipArrow') && arrow[i].parentNode.parentNode.children[1].classList.contains('showAns') && arrow[i].parentNode.parentNode.children[0].children[0].classList.contains('activeH') === true) {  
            arrow[i].classList.remove('flipArrow')
            arrow[i].parentNode.parentNode.children[1].classList.remove('showAns')
            arrow[i].parentNode.parentNode.children[0].children[0].classList.remove('activeH')
        } else {
            e.path[0].classList.toggle('flipArrow')
            e.path[1].children[0].classList.toggle('activeH')
            e.path[2].children[1].classList.toggle('showAns') 
        }
    
    }
    
})})

