export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Fernando",
};

const passenger2: Passenger = {
  name: "Melissa",
  children: ["Natalia", "Elizabeth"],
};

const printChildren = (passenger: Passenger): void => {
  const children = passenger.children?.length ? passenger.children.join(", ") : "No tiene hijos";
  //const hasChildren = passenger.children!.length; //Confia en mi siempre viene length
  console.log(passenger.name, children);
};
