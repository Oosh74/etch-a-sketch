const gridContainer = document.querySelector('.grid-container');

const drawGrid = () => {
  for (let i = 0; i < 16; i++) {
    const gridChild = document.createElement('div');
    gridChild.className = 'gridChild';
    gridContainer.appendChild(gridChild);
    console.log(i);
  }
};

drawGrid();
