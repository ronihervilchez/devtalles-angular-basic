function addNumbers(a: number, b: number) {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => `${a + b}`;

function multiplyNumbers(firstNumber: number, secondNumber?: number, base: number = 2): number {
  return firstNumber * base;
}

/* const result: number = addNumbers(1, 2);
const resultArrow: string = addNumbersArrow(1, 2);
const resultMultiply: number = multiplyNumbers(5);
console.log({ result, resultArrow, resultMultiply }); */

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
  console.log(character);
};

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`HP: ${this.hp}`);
  },
};

healCharacter(strider, 20);
strider.showHp();
export {};
