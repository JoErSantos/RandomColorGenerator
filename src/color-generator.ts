let cardContainer: HTMLElement;
let generateBtn: HTMLButtonElement;

export function setElements(container: HTMLElement, button: HTMLButtonElement){
  cardContainer = container;
  generateBtn = button;

  generateBtn.addEventListener("click",(e)=>fillCardContainer(24))
  fillCardContainer(24); 
}


function generateColor(): string{
  let colorHex: string = "#";
  for(let i = 0; i < 6; i++){
    const charIndex = (Math.floor(Math.random() * (103 - 87) ) + 87);
    if(charIndex <= 96){
      colorHex += (charIndex - 87).toString();
    }
    else{
      colorHex += String.fromCharCode(charIndex);
    }
  }
  
  return colorHex;
}

function generateColorCard(color: string): HTMLElement{
  const card: HTMLElement = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor = color;

  const cardButton: HTMLButtonElement = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.addEventListener("click",(e)=> copyColor(color));

  const colorTag: HTMLElement = document.createElement("span");
  colorTag.textContent = color;

  cardButton.appendChild(colorTag);
  card.appendChild(cardButton);

  return card;
}

function fillCardContainer(numberOfCards: number): void{
  cardContainer.innerHTML = ''
  for(let i = 0 ; i < numberOfCards ; i++){
    const card:HTMLElement = generateColorCard(generateColor())
    console.log(cardContainer)
    cardContainer.appendChild(card)
  }
}

function copyColor(color: string): void{
  navigator.clipboard.writeText(color);
}