/* Generate Color */
let colorTable = [colorShow1, colorShow2, colorShow3]
let colorTableName = [colorName1, colorName2, colorName3]
let copyColorZone1 = document.getElementById('colorShow1');
let copyColorZone2 = document.getElementById('colorShow2');
let copyColorZone3 = document.getElementById('colorShow3');
let lock1 = document.getElementById('lock1');
let lock2 = document.getElementById('lock2');
let lock3 = document.getElementById('lock3');

lock1.addEventListener('click', function(event) {
  if (lock1.classList.contains('fa-lock-open'))
  {
    lock1.classList.remove("fa-lock-open");
    lock1.classList.add("fa-lock");
  }
  else
  {
    lock1.classList.remove("fa-lock");
    lock1.classList.add("fa-lock-open");
  }
});

lock2.addEventListener('click', function(event) {
  if (lock2.classList.contains('fa-lock-open'))
  {
    lock2.classList.remove("fa-lock-open");
    lock2.classList.add("fa-lock");
  }
  else
  {
    lock2.classList.remove("fa-lock");
    lock2.classList.add("fa-lock-open");
  }
});

lock3.addEventListener('click', function(event) {
  if (lock3.classList.contains('fa-lock-open'))
  {
    lock3.classList.remove("fa-lock-open");
    lock3.classList.add("fa-lock");
  }
  else
  {
    lock3.classList.remove("fa-lock");
    lock3.classList.add("fa-lock-open");
  }
});


const generateColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }

const newColor = () => {

  if (lock1.classList.contains('fa-lock') && lock2.classList.contains('fa-lock-open') && lock3.classList.contains('fa-lock-open'))
  {
    colorTable[1].style.backgroundColor = "#" + generateColor();
    colorTableName[1].value = "#" + generateColor();
    colorTable[2].style.backgroundColor = "#" + generateColor();
    colorTableName[2].value = "#" + generateColor();
  }
  else if (lock2.classList.contains('fa-lock') && lock1.classList.contains('fa-lock-open') && lock3.classList.contains('fa-lock-open'))
  {
    colorTable[0].style.backgroundColor = "#" + generateColor();
    colorTableName[0].value = "#" + generateColor();
    colorTable[2].style.backgroundColor = "#" + generateColor();
    colorTableName[2].value = "#" + generateColor();
  }
  else if (lock3.classList.contains('fa-lock') && lock1.classList.contains('fa-lock-open') && lock2.classList.contains('fa-lock-open'))
  {
    colorTable[0].style.backgroundColor = "#" + generateColor();
    colorTableName[0].value = "#" + generateColor();
    colorTable[1].style.backgroundColor = "#" + generateColor();
    colorTableName[1].value = "#" + generateColor();
  }
  else if (lock1.classList.contains('fa-lock') && lock2.classList.contains('fa-lock') && lock3.classList.contains('fa-lock-open'))
  {
    colorTable[2].style.backgroundColor = "#" + generateColor();
    colorTableName[2].value = "#" + generateColor();

  }
  else if (lock1.classList.contains('fa-lock') && lock3.classList.contains('fa-lock') && lock2.classList.contains('fa-lock-open'))
  {
    colorTable[1].style.backgroundColor = "#" + generateColor();
    colorTableName[1].value = "#" + generateColor();

  }
  else if (lock2.classList.contains('fa-lock') && lock3.classList.contains('fa-lock') && lock1.classList.contains('fa-lock-open'))
  {
    colorTable[0].style.backgroundColor = "#" + generateColor();
    colorTableName[0].value = "#" + generateColor();
  }
  else if (lock1.classList.contains('fa-lock') && lock2.classList.contains('fa-lock') && lock3.classList.contains('fa-lock'))
  {

  }
  else
  {
    for (i = 0; i < 3; i++)
    {
      colorTable[i].style.backgroundColor = "#" + generateColor();
      colorTableName[i].value = "#" + generateColor();
    }
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
