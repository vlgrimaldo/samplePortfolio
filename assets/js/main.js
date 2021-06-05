const openBtn = document.querySelector('.fa-bars');
openBtn.addEventListener('click', () =>{
    document.querySelector('#menu').style.display = "block";
    document.querySelector('.fa-times').style.display = "block";
    document.querySelector('.fa-bars').style.display = "none";
});
const closeBtn = document.querySelector('.fa-times');
closeBtn.addEventListener('click', () =>{
    document.querySelector('#menu').style.display = "none";
    document.querySelector('.fa-times').style.display = "none";
    document.querySelector('.fa-bars').style.display = "block";
});



$(document).ready(function (){
    $('.submit').click(function (event){

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var status = $('.status')
        status.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            status.append('<div>Email is valid</div>')
        }else{
            status.append('<div>Email is not valid</div>') 
            event.preventDefault()
        }

        if(subject.length >= 2){
            status.append('<div>Subject is valid</div>')
        }else{
            status.append('<div>Subject must have 2 characters</div>')
            event.preventDefault()
        }

        if(message.length >= 10){
            status.append('<div>Message is valid</div>')
        }else{
            status.append('<div>Message is too short</div>')
            event.preventDefault()
        }
    })
})
