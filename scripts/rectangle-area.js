
function calculateRectangleArea(){
    
    //get length
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText)
    
    console.log(length);

    // get width 
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText)
    console.log(width);

    //calculate rec area
    const area = width * length;
    console.log('area of the rectangle is:',area);

    //display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText = area;
}