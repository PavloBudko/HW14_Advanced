  
//Завдання 1:Створіть нескінченний генератор ідентифікаторів
function* createIdGenerator() {
    let i=1
    while (true){
      yield i;
      i++;
    }  
    //return i;
  }
  
  const idGenerator = createIdGenerator();
  console.log ('Завдання 1:Створіть нескінченний генератор ідентифікаторів:');
  console.log (idGenerator.next().value);
  console.log (idGenerator.next().value);
  console.log (idGenerator.next().value);
  console.log (idGenerator.next().value);
  console.log (idGenerator.next().value);
  console.log (idGenerator.next().value);
  
  //Завдання 2 (advanced) Створіть генератор, який буде регулювати розміри шрифту для вашого сайту.
  function* newFontGenerator(fontSize) {
    let result = yield fontSize;
    while (true){
      if (result === 'up')
        fontSize+=2;    
      else if (result === 'down')
        fontSize-=2;    
      else 
        fontSize = fontSize;        
      result = yield fontSize;  
    }  
  }
  
  const fontGenerator = newFontGenerator(14); // 14 – стартове значення
  console.log ('Завдання 2:Створіть генератор, який буде регулювати розміри шрифту для вашого сайту:');
  console.log (fontGenerator.next("up").value);
  console.log (fontGenerator.next("up").value);
  console.log (fontGenerator.next("up").value);
  console.log (fontGenerator.next().value);
  console.log (fontGenerator.next("down").value);
  console.log (fontGenerator.next("down").value);
  console.log (fontGenerator.next("down").value);
  console.log (fontGenerator.next().value);
  
  
  document.querySelector(".paragraph").style.fontSize = `${14}px`
  
  const buttonSmall = document.querySelector("#small__button")
  
  buttonSmall.addEventListener('click', () => {
    let fontSize = fontGenerator.next('down').value;
    document.querySelector(".paragraph").style.fontSize = `${fontSize}px`;
    document.querySelector(".paragraph").style.lineHeight = `${fontSize}px`;
  })
  
  const buttonBig = document.querySelector("#big__button")
  
  buttonBig.addEventListener('click', () => {
    let fontSize = fontGenerator.next('up').value;
    document.querySelector(".paragraph").style.fontSize = `${fontSize}px`;
    document.querySelector(".paragraph").style.lineHeight = `${fontSize}px`;
  })