function ShowSidebar(){
     const sidebar = document.querySelector('.menu');
     const hamburger = document.querySelector('.fa-bars');
     const close =document.querySelector('.fa-xmark');
     sidebar.style.display ='flex'
     hamburger.style.display='none'
     close.style.display='inline-block'
}

function HideSidebar(){
     const sidebar = document.querySelector('.menu')
     const hamburger = document.querySelector('.fa-bars')
     const close =document.querySelector('.fa-xmark')
     sidebar.style.display ='none'
     hamburger.style.display='inline-block'
     close.style.display='none'
}