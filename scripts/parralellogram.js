function parralellogramArea(){
    //parallelogram base
    const parallelogramInput = document.getElementById('parallelogram-base');
    const parallelogramText = parallelogramInput.value; 
    const base  = parseFloat(parallelogramText);
    console.log(base)

    //paralellogram height
    const paralellogramHeightInput = document.getElementById('parrallelogram-height');
    const heightText = paralellogramHeightInput.value;
    const height = parseFloat(heightText);
    console.log(height)
// calculate area
const area = base * height;
console.log('Area of parallelogram is:', area)

//diplay area

const paralellogramAreaSpan = document.getElementById(parallelogram-area);
paralellogramAreaSpan.innerText = area;
    
}