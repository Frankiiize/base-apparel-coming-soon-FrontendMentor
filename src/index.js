let button = document.querySelector('#sendButton');
let email = document.querySelector('#email');
let print = document.querySelector('#print');
let iconError = document.querySelector('#iconError');
let printContainer = document.querySelector('#print');
let click = true;


button.onclick = () => {
    
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let span = document.createElement('span');
    if(click === true) {
        click = false;
        if(emailRegex.test(email.value)){
            console.log('valido')
            print.append(span);
            span.classList = 'printContainer__span'
            span.style.color = 'green';
            span.innerHTML = "success"
            setTimeout(() => {
                printContainer.removeChild(span);
                iconError.style.display = 'none';
                click = true;
            },1300);           
        } else {
            console.log('no valido')
            iconError.style.display = 'block';
            print.append(span);
            span.classList = 'printContainer__span'
            span.innerHTML = "Please provide a valid email"
            setTimeout(() => {
                printContainer.removeChild(span);
                iconError.style.display = 'none';
                click = true;
            },1300); 
        }
    }else {
        return 
    } 
}

