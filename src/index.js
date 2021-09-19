import './sass/main.scss';

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
const startButtonSwitch = document.querySelector('[data-action="start"]');
const stopButtonSwitch = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

class ObjColorsSwitch {
  constructor(colors, startBtn, stopBtn, place) {
    this.colors = colors;
    this.place = place;
    this.intervalId = null;
    this.startBtn = startBtn;
    this.stopBtn = stopBtn;
  }

  randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  placeColor() {
    this.place.style.backgroundColor =
      this.colors[this.randomIntegerFromInterval(0, this.colors.length - 1)];
  }
  startSwitch() {
    this.startBtn.addEventListener('click', () => {
      this.intervalId = setInterval(() => {
        this.placeColor(this.place);
      }, 1000);
      this.startBtn.disabled = true;
    });
  }
  stopSwitch() {
    this.stopBtn.addEventListener('click', () => {
      clearInterval(this.intervalId);
      this.startBtn.disabled = false;
    });
  }
}

const myFetch = new ObjColorsSwitch(colors, startButtonSwitch, stopButtonSwitch, body);
myFetch.startSwitch();
myFetch.stopSwitch();
