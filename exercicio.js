// input range
let slide1 = document.querySelectorAll('.slider')[0];
let slide2 = document.querySelectorAll('.slider')[1];
let slide3 = document.querySelectorAll('.slider')[2];

// range value
let value1 = document.querySelectorAll('.value')[0];
let value2 = document.querySelectorAll('.value')[1];
let value3 = document.querySelectorAll('.value')[2];

//gets the body
let body = document.querySelector("#body");
console.log(body);

//sets the default value for the background to start white
slide1.value = 229;
slide2.value = 229;
slide3.value = 231;

//shows the default value of each range
value1.value = slide1.value;
value2.value = slide2.value;
value3.value = slide3.value;

slide1.addEventListener('input', function()
{
    value1.value = slide1.value;
    var val1 = slide1.value;
    var val2 = slide2.value;
    var val3 = slide3.value;
    body.style.backgroundColor = "rgb("+val1+", "+val2+", "+val3+")";
})

slide2.addEventListener('input', function()
{
    value2.value = slide2.value;
    var val1 = slide1.value;
    var val2 = slide2.value;
    var val3 = slide3.value;
    body.style.backgroundColor = "rgb("+val1+", "+val2+", "+val3+")";
})

slide3.addEventListener('input', function()
{
    value3.value = slide3.value;
    var val1 = slide1.value;
    var val2 = slide2.value;
    var val3 = slide3.value;
    body.style.backgroundColor = "rgb("+val1+", "+val2+", "+val3+")";
})

