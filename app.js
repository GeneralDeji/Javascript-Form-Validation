const form = document.querySelector('form');
const emailDiv = document.querySelector('.email-div');
const email = document.querySelector('.email');
const passwordDiv = document.querySelector('.password-div');
const password = document.querySelector('.password');
const confirmDiv = document.querySelector('.confirm-div');
const confirm = document.querySelector('.confirm')

//Email Validation
const checkEmail = ()=>{
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.value.match(emailPattern)){
        return emailDiv.classList.add('invalid') //this is to add invalid classname to my inputDiv
    }
    emailDiv.classList.remove('invalid')// removes the invalid classname
}

//Hide and Show icon function
const eyeIcons = document.querySelectorAll('.eye-icon');

eyeIcons.forEach((eyeIcon)=>{
    eyeIcon.addEventListener('click', ()=>{
        const eyeInput = eyeIcon.parentElement.querySelector('input') // with this, we saying that, when we click on the eyeIcon, it should go to the parentElement of the eyeIcon (which already contains an "input" with the "eyeicon") and inside the parentElement it should pick the "input"
        if(eyeInput.type === "password"){
            eyeIcon.classList.replace('bxs-hide', 'bxs-show')
            return eyeInput.type = 'text'
        }
        eyeIcon.classList.replace('bxs-show', 'bxs-hide')
        eyeInput.type = 'password'
        
    })
})

//Password Validation
const checkPass = () =>{
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!password.value.match(passPattern)){
        return passwordDiv.classList.add('invalid')
    }
    passwordDiv.classList.remove('invalid')
}

//Confirming the Password
const confirmPass = () =>{
    if(password.value !== confirm.value || confirm.value === ''){
        return confirmDiv.classList.add('invalid')
    }
    confirmDiv.classList.remove('invalid')
}


//Calling function on Form Submit
form.addEventListener('submit', (e)=>{
    e.preventDefault(); //preventing the form from submitting
    //These is what will trigger the error message when we press the submit button
    checkEmail()
    checkPass()
    confirmPass()

    //Now we do this eventlistener, for our Function to be running while we are typing and not when we click on the button before it works. which is why we use the "keyup" event
    email.addEventListener('keyup', checkEmail) // This way our email input will be under an event of checking the validity of the email while we are typing
    password.addEventListener('keyup', checkPass)
    confirm.addEventListener('keyup', confirmPass)



    if(!email.classList.contains('invalid') && !password.classList.contains('invalid') && !confirm.classList.contains('invalid')){
        location.href = form.getAttribute('action')

    }
})