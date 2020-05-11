const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field = [[]]) {
    this.field = field;
    this.x = 0;
    this.y = 0;
    this.field[0][0] = pathCharacter; 
  }
  
  askQuestion() {
    const answer = prompt('Which way? ').toUpperCase();
    switch (answer) {
      case 'U':
        this.y -= 1;
        break;
      case 'D':
        this.y += 1;
        break;
      case 'L':
        this.x -= 1;
        break;
      case 'R':
        this.x += 1;
        break;
      default:
        console.log('Enter U, D, L or R.');
        this.askQuestion();
        break;
    }
  }

  print() {
    const displayString = this.field.map(row => {
        return row.join('');
      }).join('\n');
    console.log(displayString);
  }
  
  isInBounds() {
    return (
      this.y >= 0 &&
      this.x >= 0 &&
      this.y < this.field.length &&
      this.x < this.field[0].length
    );
  }

  isHat() {
    return this.field[this.y][this.x] === hat;
  }

  isHole() {
    return this.field[this.y][this.x] === hole;
  }

  runGame() {
    let playing = true;
    while (playing) {
      this.print();
      this.askQuestion();
      if (!this.isInBounds()) {
        console.log('Out of bounds instruction!');
        playing = false;
        break;
      } else if (this.isHole()) {
        console.log('Sorry, you fell down a hole!');
        playing = false;
        break;
      } else if (this.isHat()) {
        console.log('Congrats, you found your hat!');
        playing = false;
        break;
      }
      // Update the current location on the map
      this.field[this.y][this.x] = pathCharacter;
    }
  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);
myField.runGame();