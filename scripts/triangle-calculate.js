/**
 * objective get base,height of  triangle.calculate the area by using provided formula and then display the area.
 * step-1 get the base value of the triangle
 * step-2 added an id in the base input field
 * step-3 use getElementById to access the input field
 * step-4 get value from the input field
 * step-5 convert the value to a number,use parseFloat
 * 
 * */







function calculateTriangleArea(){
    // get triangle base value
   const triangleBaseInput= document.getElementById('triangle-base');
   const triangleBaseText= triangleBaseInput.value;
   const base= parseFloat(triangleBaseText);
   console.log( base);

   //get triangle height
   const triangleHeightInput = document.getElementById('triangle-height');
   const triangleHeightText = triangleHeightInput.value;
   const height = parseFloat(triangleHeightText)
   console.log(height )

   // area calculate

   const area = 0.5 * base * height;
   console.log('area of the triangle is:', area)

   //display area

   const triangleAreaSpan = document.getElementById('triangle-area');
   triangleAreaSpan.innerText = area;


}
