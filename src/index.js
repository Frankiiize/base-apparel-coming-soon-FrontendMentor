let button = document.querySelector('#sendButton');
let email = document.querySelector('#email');
let print = document.querySelector('#print');
let iconError = document.querySelector('#iconError');

button.onclick = () => {

    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let span = document.createElement('span');
    if(emailRegex.test(email.value)){
        //debugger
        console.log('valido')
        print.append(span);
        span.classList = 'printContainer__span'
        span.innerHTML = "success"
        
    } else {
        console.log('no valido')
        iconError.style.display = 'block';
        print.append(span);
        span.classList = 'printContainer__span'
        span.innerHTML = "Please provide a valid email"
        setTimeout(() => {
            span.innerHTML = "";
            iconError.style.display = 'none';
        },2000); 
    }
    
}

