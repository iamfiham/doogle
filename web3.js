const para_div = document.querySelectorAll('.service-section div');

para_div.forEach((div)=>{
   div.querySelector('h3').addEventListener('click',()=>{
     
      div.querySelector('p').classList.toggle('s-close'); 
      div.querySelector('p').classList.toggle('s-open');

      
    })
})




const questions= document.querySelectorAll('.question')

questions.forEach((question,index)=>{
    question.querySelector('div').addEventListener('click',()=>{
    
    questions.forEach((q,ind)=>{
    if(index != ind) {
        q.querySelector('p').classList.add('q-close');
      q.querySelector('p').classList.remove('q-open'); 
      q.querySelector('div span').innerHTML='<i class="fa-solid fa-caret-down"></i>' 
   
    }
       
    })  
         if
    (question.querySelector('p').classList.contains('q-close')) {
        question.querySelector('p').classList.remove('q-close');
        question.querySelector('p').classList.add('q-open');
        question.querySelector('div span').innerHTML='<i class="fa-solid fa-caret-down fa-rotate-180"></i>'
        
        }
        else {
        question.querySelector('p').classList.add('q-close');
        question.querySelector('p').classList.remove('q-open');
        question.querySelector('div span').innerHTML='<i class="fa-solid fa-caret-down"></i>'
        }
    }
        
    )
})






  const s_navbar = document.querySelector('.second-navbar') ;
const menu = document.querySelector('#menu');
const menu_lists =document.querySelectorAll('ol li');

 menu.addEventListener('click',()=>{
    if (s_navbar.classList.contains('nav_close')) {
       s_navbar.classList.remove('nav_close');
      s_navbar.style.maxHeight="600px";
      s_navbar.style.visibility="visible"; 
      s_navbar.style.marginBottom="40px"
      s_navbar.style.opacity="1"
      
      
       
    }
    else {
      s_navbar.classList.add('nav_close'); 
      s_navbar.style.maxHeight="0px";
      s_navbar.style.visibility="hidden"; 
      s_navbar.style.marginBottom="0px"
      s_navbar.style.opacity="0"
      
    }
    
});


/*  menu_lists.forEach((list)=>{
    list.addEventListener('click',()=>{
    s_navbar.classList.add('nav_close'); 
      s_navbar.style.maxHeight="0px";
      s_navbar.style.visibility="hidden"; 
      s_navbar.style.marginBottom="0px"
      s_navbar.style.opacity="0"
      }
  )}
) 
 */ 