let button = document.querySelector('#sendButton');
let email = document.querySelector('#email');
let print = document.querySelector('#print');
let iconError = document.querySelector('#iconError');
let printContainer = document.querySelector('#print');
let click = false;


button.onclick = () => {
    
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let span = document.createElement('span');
debugger
    if(click === true) {
        return
    }else {
        click = true;
        if(emailRegex.test(email.value)){
            //debugger
            console.log('valido')
            print.append(span);
            span.classList = 'printContainer__span'
            span.style.color = 'green';
            span.innerHTML = "success"
            setTimeout(() => {
                printContainer.removeChild(span);
                //span.innerHTML = "";
                iconError.style.display = 'none';
                click = false;
            },1300); 
            
        } else {
            console.log('no valido')
            iconError.style.display = 'block';
            print.append(span);
            span.classList = 'printContainer__span'
            span.innerHTML = "Please provide a valid email"
            setTimeout(() => {
                printContainer.removeChild(span);
                //span.innerHTML = "";
                iconError.style.display = 'none';
                click = false;
            },1300); 
        }
        

    }

    
}

