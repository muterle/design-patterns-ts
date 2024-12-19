import Car from "./vehicles/Car";
import Motorcycle from "./vehicles/Motorcycle";
import TypeVehicle from "./vehicles/TypeVehicle";
import Vehicle from "./vehicles/Vehicle";

const typeVehicle = TypeVehicle.CAR;
let vehicle;

if (typeVehicle === TypeVehicle.CAR) {
  vehicle = new Car("Vermelho", 2022, 2.0, 4, 4);
} else if (typeVehicle === TypeVehicle.MOTORCYCLE) {
  vehicle = new Motorcycle("Vermelho", 2022, 250);
}
