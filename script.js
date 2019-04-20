
let textArea = document.getElementById('text-area');
let okButton = document.getElementById('okButton')
let visibleText = false;

// textArea.innerText = 'Hello World';
textArea.style.display = 'none';


okButton.addEventListener('click', function(){

    if(visibleText){
        textArea.style.display = 'none';
        visibleText = false;
    } else {
        textArea.style.display = 'block';
        visibleText = true;
    }
})
