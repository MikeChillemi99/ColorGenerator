/* Generate Color */
let colorTable = [colorShow1, colorShow2, colorShow3]
let colorTableName = [colorName1, colorName2, colorName3]
let copyColorZone1 = document.getElementById('colorShow1');
let copyColorZone2 = document.getElementById('colorShow2');
let copyColorZone3 = document.getElementById('colorShow3');


const generateColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }

const newColor = () => {
  for (let i = 0; i < 3; i++)
  {
      colorTable[i].style.backgroundColor = "#" + generateColor();
      colorTableName[i].value = "#" + generateColor();
  }
}

generate.addEventListener("click", newColor);
newColor();


copyColorZone1.addEventListener('click', function(event) {
    let copyColorName1 = document.getElementById('colorName1');
    copyColorName1.focus();
    copyColorName1.select();
    navigator.clipboard.writeText(copyColorName1.value);
});

copyColorZone2.addEventListener('click', function(event) {
    let copyColorName2 = document.getElementById('colorName2');
    copyColorName2.focus();
    copyColorName2.select();
    navigator.clipboard.writeText(copyColorName2.value);
});

copyColorZone3.addEventListener('click', function(event) {
    let copyColorName3 = document.getElementById('colorName3');
    copyColorName3.focus();
    copyColorName3.select();
    navigator.clipboard.writeText(copyColorName3.value);
});
