import './style.css';

const directions = {
  top: '🔼',
  bottom: '🔽',
};
const direction = document.querySelector('.direction');
const elevator = document.querySelector('.elevator');
let currentScroll = 0;

elevator.addEventListener('scroll', () => {
  let positionFromTop = elevator.scrollTop;
  let floorNumber = Math.floor(10.5 - positionFromTop / 150);

  if (currentScroll > elevator.scrollTop) {
    direction.textContent = `Kierunek: ${directions.top}  ${floorNumber}`;
  } else {
    direction.textContent = `Kierunek: ${directions.bottom}  ${floorNumber}`;
  }

  currentScroll = elevator.scrollTop;
});
