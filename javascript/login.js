

document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('userEmail');
    const email = emailField.value;
    
    const passwordField = document.getElementById('userPassword');
    const password = passwordField.value;

    if(email === 'zordanblog009@gmail.com' && password === 'Mahis@Itb281'){
        console.log('valid User');
    }else{
        console.log('invalid User');
    }
})
