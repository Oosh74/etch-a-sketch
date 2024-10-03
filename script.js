const gridContainer = document.querySelector('.grid-container');
const changeGridBtn = document.querySelector('.change-grid-btn');

const drawGrid = () => {
  for (let i = 0; i < 256; i++) {
    const gridChild = document.createElement('div');
    gridChild.className = 'gridChild';
    gridContainer.appendChild(gridChild);
    console.log(i);
  }
};

changeGridBtn.addEventListener('click', () => {
  let gridNumber = prompt(
    'How large should the grid be (must be 100x100 or smaller)?'
  );

  while (gridNumber > 100 || isNaN(gridNumber)) {
    if (gridNumber > 100) {
      gridNumber = prompt(
        'The grid cannot be larger than 100x100, please input a smaller number'
      );
    } else if (isNaN(gridNumber)) {
      gridNumber = prompt(
        'You did not enter a valid number, please try again.'
      );
    } else {
      break;
    }
  }

  return console.log('gridNumber', gridNumber);
});

drawGrid();
