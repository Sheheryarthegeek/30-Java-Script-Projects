const inputField = document.querySelector('#password')
const generateButton = document.getElementsByTagName('button')[0]
const copyButton = document.querySelector('#copy')
const Orlength = 12;


// Now let's assing the values to the varaibles

const UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numeric = '0123456789';
const symbol = '!@#$%^&'

const allChars = UpperCase + LowerCase + numeric + symbol

// console.log(allChars[Math.floor(Math.random() * allChars.length)]);



// Function to generate a random character from a given string

function getRandomPass() {
    let password = '';
    // console.log(password);
    // password += getRandomChar(UpperCase);
    // password += getRandomChar(LowerCase);
    // password += getRandomChar(numeric);
    // password += getRandomChar(symbol);
    while (Orlength > password.length) {
        password += allChars[Math.floor((Math.random() * allChars.length))];
    }
    
    inputField.value = password;
    // console.log(password);
    
}

// Now let's write the code for generate button 

generateButton.addEventListener('click', ()=>{
    getRandomPass();
}) 


// Let's write the EventListener for copy button
copyButton.addEventListener('click', ()=>{
    password.select()
    document.execCommand('copy');
});