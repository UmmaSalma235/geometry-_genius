function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');
    console.log(perimeter,apothem)
    const area =0.5* perimeter * apothem;
    setInnerTextByID('pentagon-area, area')
    

}
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.ariaValueMax;
    const value = parseFloat(inputValueText);
    return value;
}
function setInnerTextByID(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}