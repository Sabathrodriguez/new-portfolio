const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control');
const sectBtn = document.querySelector('.controls');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    //Button click active class
    for(let i = 0; i < sectBtns.length; i++) {
        sectBtns[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

   //Sctions Active 
   allSections.addEventListener('click', (e) =>{
    const id = e.target.dataset.id;
    if(id){
        //resmove selected from the other btns
        sectBtns.forEach((btn) =>{
            btn.classList.remove('active');
            // console.log(btn.classList);
        })
        e.target.classList.add('active')
        // e.target.classList.add("active");
        console.log(e.target.classList);

        //hide other sections
        sections.forEach((section)=>{
            section.classList.remove('active')
        })

        const element = document.getElementById(id);
        element.classList.add('active');
    }
})
}

PageTransitions();