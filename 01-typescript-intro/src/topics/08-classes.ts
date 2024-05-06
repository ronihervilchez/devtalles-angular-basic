export class Person {
  constructor(public firstName: string, lastName: string, protected address: string) {}
}

//Este seria un ejemplo de herencia
/* export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    protected address: string
  ) {
    super(realName, address);
  }
} */

//Priorizando la composicion
//En este caso se crea una instancia de la clase Person dentro de la clase Hero
//Pero no está bien que la clase Hero se vea afectada por los cambios de la clase Person
/* export class Hero {
  public person: Person;
  constructor(public alterEgo: string, public age: number, public realName: string, protected address: string) {
    this.person = new Person(realName, address);
  }
} */

export class Hero {
  constructor(public alterEgo: string, public age: number, public realName: string, public person: Person) {}
}

const tony = new Person("Tony", "Stark", "New York");
const ironman = new Hero("Ironman", 45, "Tony Stark", tony);

console.log(ironman);
