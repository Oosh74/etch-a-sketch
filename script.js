const gridContainer = document.querySelector('.grid-container');
const changeGridBtn = document.querySelector('.change-grid-btn');

const drawGrid = (grid = 16) => {
  gridContainer.replaceChildren();

  for (let i = 0; i < grid * grid; i++) {
    const gridChild = document.createElement('div');
    gridChild.className = 'gridChild';
    gridChild.style.width = `${(960 - 48) / grid}px`;
    gridChild.style.height = `${(960 - 49) / grid}px`;
    gridContainer.appendChild(gridChild);
    console.log(i);
  }
};

changeGridBtn.addEventListener('click', () => {
  let gridNumber = prompt(
    'How large should the grid be (must be 64x64 or smaller)?'
  );

  while (gridNumber > 64 || isNaN(gridNumber)) {
    if (gridNumber > 64) {
      gridNumber = prompt(
        'The grid cannot be larger than 64x64, please input a smaller number'
      );
    } else if (isNaN(gridNumber)) {
      gridNumber = prompt(
        'You did not enter a valid number, please try again.'
      );
    } else {
      break;
    }
  }

  return drawGrid(gridNumber);
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * 251);
};

gridContainer.addEventListener('mouseover', (e) => {
  if (
    e.target.classList.contains('gridChild') &&
    !e.target.classList.contains('change-background')
  ) {
    e.target.classList.add('change-background');
    e.target.style.backgroundColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
    e.target.style.opacity = '10%';
  } else if (
    e.target.classList.contains('change-background') &&
    e.target.style.opacity !== '1'
  ) {
    let currentOpacity = Number(e.target.style.opacity);
    console.log(currentOpacity);
    let newOpacity = (currentOpacity += 0.1);
    e.target.style.opacity = `${newOpacity}`;
  }
});
