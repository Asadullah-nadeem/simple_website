// Password
const pwd = document.getElementById("pwd")
const chk = document.getElementById("chk")

chk.onchange = function (e){
    pwd.type = chk.checked ? "Text" : "password"
}
// Age calculate
const inputbtn = document.querySelector(".age-dob-input");
const calculatebtn = document.querySelector(".calculate-btn");
const ageresult = document.querySelector(".age-result");

calculatebtn.addEventListener("click", () => {
    if(inputbtn.value === ""){
        alert("Please enter your date of birth");
    }else {
        console.log("input",inputbtn.value);
        const dob = new Date(inputbtn.value);
        console.log("dob",dob);
        const dob_year = dob.getFullYear();
        console.log("dob_year",dob_year);

        // current
        const now = new Date();
        console.log("now",now);
        const now_year = now.getFullYear();
        console.log("now_year",now_year);
        const age = now_year - dob_year;
        console.log("age",age);
        
        ageresult.innerHTML = `Your age is ${age}`;

    }
});

// BMI
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const bmi_value = document.querySelector('#bmi-value');
const bmi_status = document.querySelector('#bmi-status');
const calculate = document.querySelector('#calculate-bmi');

calculate.addEventListener('click', () => {
   if( height.value === "" || weight.value === "" ) {
        alert('Please enter your height and weight');
        return;
   }else{
        let height_value = height.value;
        let weight_value = weight.value;
        let height_value_meters = height_value / 100;
        let bmi = weight_value / (height_value_meters * height_value_meters);
        bmi = bmi.toFixed(2);
        bmi_value.textContent = bmi;
        if( bmi <= 18.4){
            bmi_status.textContent = 'Underweight';
        }else if( bmi >= 18.5 && bmi <= 24.9 ){
            bmi_status.textContent = 'Normal';
        }else if( bmi >= 25 && bmi <= 39.9 ){
            bmi_status.textContent = 'Overweight';
        }else if( bmi >= 40){
            bmi_status.textContent = 'Obese';
        }
   }
});
// Captcha
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const captcha = document.querySelector(".captcha")
const input = document.querySelector("#input")
const submit = document.querySelector("#submit")
const refresh = document.querySelector("#refresh")

submit.addEventListener("click",()=>{
    const inpval = input.value;
    const captchaval = captcha.textContent.trim();
    console.log(inpval)
    console.log(captchaval)
    if( inpval == captchaval ){
        alert("Captcha is Matched")
    }else {
        alert("Captcha is not Matched")
    }
})


refresh.addEventListener("click",()=>{
    captcha.textContent = generateCaptcha();
})
function generateCaptcha(){
    let captcha_gen = "";
    for(let i=0;i<6;i++){
        captcha_gen+= chars[Math.floor(Math.random()*chars.length)]
    }
    return captcha_gen
}

console.log(generateCaptcha())

// Charactor
const text = document.querySelector('#text')
const total_char = document.querySelector('#total_char')
const remaining_char = document.querySelector('#remaining_char')


text.addEventListener("input",()=>{
    const total = text.value.length
    total_char.innerText = total
    remaining_char.innerText = 50 - total

    if( total === 50){
        text.disabled = true
    }else {
        text.disabled = false
    }
})
// counter
const count = document.querySelector('#count');
const sub = document.querySelector('#sub');
const add = document.querySelector('#add');
const reset = document.querySelector('#reset');

let counter = 0;

sub.addEventListener('click', () => {
    counter--;
    count.innerHTML = counter;
});

add.addEventListener('click', () => {
    counter++;
    count.innerHTML = counter;
});

reset.addEventListener('click', () => {
    counter = 0;
    count.innerHTML = counter;
});

// Dictionary
const inputt = document.querySelector('#inputt');
const output = document.querySelector('#meaning');
const search = document.querySelector('#search');

search.addEventListener('click', async() => {
    const val = inputt.value;
    if( val === ""){
        alert("Please enter a word");
    }else {    
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${val}`;
        let meaning = await fetch(url);
        meaning = await meaning.json();
        console.log("meaning",meaning[0]['meanings'][0]["definitions"][0]["definition"])  
        output.textContent = meaning[0]['meanings'][0]["definitions"][0]["definition"];       
    }
});


// Emoji APi
const clickme = document.querySelector('#btn')
console.log("clickme",clickme)
const outputt = document.querySelector(".outputt")
console.log("outputt",outputt)

const url = "https://emoji-api.com/emojis?access_key=8e022d3ff3c46f5f07bd5d43680f36baa9b39d52";

function getRandom(n){
    return Math.floor(Math.random()*n)
}

clickme.addEventListener("click",async ()=> {
    console.log("hello from clickme")

    let getData = await fetch(url)
    getData = await getData.json()
    console.log("getdata length", getData.length)
    console.log("getData",getData)
    console.log(getRandom(getData.length),"getRandom")
    console.log("random getDataObject", getData[200])
    console.log("random getRandomData",getData[getRandom(getData.length)])
    const randomN = getRandom(getData.length)
    const character= getData[randomN].character
    const uniCode = getData[randomN].unicodeName
    console.log(character)
    console.log(uniCode)
    clickme.textContent = character
    outputt.textContent = uniCode

});

const lengthp = document.querySelector('#length-number');
const upper = document.querySelector('#uppercase');
const lower = document.querySelector('#lowercase');
const number = document.querySelector('#numbers');
const symbol = document.querySelector('#symbols');
const passinp = document.querySelector('#pass-input');
const copy = document.querySelector('#copy');
const generate = document.querySelector('#generate');

const uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercasestr = 'abcdefghijklmnopqrstuvwxyz';
const numberstr = '0123456789';
const symbolstr = '!@#$%^&*()_+';

generate.addEventListener('click', () => {
    let password = ''; // Reset password
    let str = '';
    
    if (upper.checked) {
        str += uppercasestr;
    }
    
    if (lower.checked) {
        str += lowercasestr;
    }
    
    if (number.checked) {
        str += numberstr;
    }
    
    if (symbol.checked) {
        str += symbolstr;
    }
    
    if (str === '') {
        alert('Please select at least one character type!');
        return;
    }
    
    const length = parseInt(lengthp.value, 10);
    if (isNaN(length) || length <= 0) {
        alert('Please enter a valid length for the password.');
        return;
    }
    
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * str.length);
        password += str[index];
    }
    
    passinp.value = password;
});

copy.addEventListener('click', () => {
    if( passinp.value === '' ){
        alert('Please Generate a Password First');
    }else {
        const newele = document.createElement('textarea');
        newele.value = passinp.value;
        document.body.appendChild(newele);
        newele.select();
        document.execCommand('copy');
        alert('Password Copied to Clipboard');
        newele.remove();
    }
});


const inputfield = document.querySelector('#password');
const outputfield = document.querySelector('#output');
inputfield.addEventListener('input', function() {
    console.log(inputfield.value);
    let password = inputfield.value;
    if (password.length < 8) {
        outputfield.innerText = 'Password is too short';
        outputfield.style.color = 'red';
    }else {
        console.log("is loercase",password.search(/[a-z]/));
        if( password.search(/[a-z]/) == -1 ) {
            outputfield.innerText = 'Password is missing a lowercase letter';
            outputfield.style.color = 'red';
        }else if (password.search(/[A-Z]/) == -1){
            outputfield.innerText = 'Password is missing a Uppercase letter';
            outputfield.style.color = 'red';
        }else if (password.search(/[0-9]/) == -1){
            outputfield.innerText = 'Password is missing a Numeric letter';
            outputfield.style.color = 'red';
        }else if (password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\\;\'\,\.]/) == -1){
            outputfield.innerText = 'Password is missing a Special Character letter';
            outputfield.style.color = 'red';
        }
        else {
            outputfield.innerText = 'Password is strong';
            outputfield.style.color = 'green';
        }

    }
});
const qrinput = document.getElementById('qr-input');
const qrimg = document.getElementById('qr-img');
const qrbutton = document.getElementById('qr-button');

console.log(qrinput, qrimg, qrbutton)

qrbutton.addEventListener('click', () => {

    const inputValue = qrinput.value;
    console.log(inputValue)    

    if( !inputValue ) {
        alert('Please enter a valid URL');
        return;
    }else{
        qrimg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        arimg.alt = `QR code for ${inputValue}`;
    }

});

const month = document.querySelector(".month")
const weekday = document.querySelector(".weekday")
const day = document.querySelector(".day")
const year = document.querySelector(".year")

window.addEventListener("DOMContentLoaded",()=>{
    const date = new Date();
    console.log(date,"date")
    console.log("month",date.toLocaleDateString("en-US",{month:"long"}))
    console.log("day",date.getDate())
    console.log("year",date.getFullYear())
    console.log("weekday",date.toLocaleDateString("en-US",{weekday:"long"}))
    day.textContent = date.getDate();
    year.textContent = date.getFullYear();
    month.textContent = date.toLocaleDateString("en-US",{month:"long"})
    weekday.textContent = date.toLocaleDateString("en-US",{weekday:"long"})
})

const scoree = document.querySelector('#scoree');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
let inputtt = document.querySelector('#inputtt');
const submittt = document.querySelector('#submittt');
let counttt = 0;
submittt.addEventListener('click', () => {
    let val = inputtt.value;
    val = val.trim();
    val = Number(val);
    let mult = document.querySelector('#num1').textContent * document.querySelector('#num2').textContent;
    mult = Number(mult);
    if( document.querySelector('#inputtt').value === '') {
        alert('Please enter a number')
    }else if (val === mult) {
        console.log("inside if")
        counttt++;
        scoree.textContent = counttt;
        num1.textContent = Math.floor(Math.random() * 20);
        num2.textContent = Math.floor(Math.random() * 20);
    }else {
        num1.textContent = Math.floor(Math.random() * 20);
        num2.textContent = Math.floor(Math.random() * 20);
    }
});

const quiz = [
    {
        question: "Q1. What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Q2. What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "Q3. What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",
    },
    {
        question: "Q4. Who invented the World Wide Web?",
        ans1text: "Steve Jobs",
        ans2text: "Bill Gates",
        ans3text: "Tim Berners-Lee",
        ans4text: "Elon Musk",
        answer: "Tim Berners-Lee",
    },
    {
        question: "Q5. Which company developed the React.js library?",
        ans1text: "Google",
        ans2text: "Facebook",
        ans3text: "Microsoft",
        ans4text: "Apple",
        answer: "Facebook",
    },
    {
        question: "Q6. What does CSS stand for?",
        ans1text: "Computer Style Sheets",
        ans2text: "Creative Style Sheets",
        ans3text: "Cascading Style Sheets",
        ans4text: "Colorful Style Sheets",
        answer: "Cascading Style Sheets",
    },
    {
        question: "Q7. Which programming language is used for Android app development?",
        ans1text: "Swift",
        ans2text: "Kotlin",
        ans3text: "Ruby",
        ans4text: "PHP",
        answer: "Kotlin",
    },
    {
        question: "Q8. What does SQL stand for?",
        ans1text: "Structured Query Language",
        ans2text: "Stylish Question Language",
        ans3text: "Statement Question Language",
        ans4text: "Strong Question Language",
        answer: "Structured Query Language",
    },
    {
        question: "Q9. Which company developed the TypeScript language?",
        ans1text: "Google",
        ans2text: "Microsoft",
        ans3text: "Amazon",
        ans4text: "IBM",
        answer: "Microsoft",
    },
    {
        question: "Q10. Which of the following is a NoSQL database?",
        ans1text: "MySQL",
        ans2text: "PostgreSQL",
        ans3text: "MongoDB",
        ans4text: "SQLite",
        answer: "MongoDB",
    }
];

const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);  
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submitttt = document.getElementById("submitttt");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submitttt.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});

