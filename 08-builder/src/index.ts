import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./director/Director";
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.constructSedanCar();

const sedan: Vehicle = builder.getVehicle();
console.log(`Fabricado um veículo: ${sedan.vehicleType} com ${sedan.wheelsTotal()} rodas`);

director.constructTruck();

const truck: Vehicle = builder.getVehicle();
console.log(`Fabricado um veículo: ${truck.vehicleType} com ${truck.wheelsTotal()} rodas`);

director.constructMotorcycle();

const motorcycle: Vehicle = builder.getVehicle();
console.log(
  `Fabricado um veículo: ${motorcycle.vehicleType} com ${motorcycle.wheelsTotal()} rodas`
);
