import { CarBlueprint } from "./car_blueprint.js";

const dieselCar = new CarBlueprint("červená", "V8", "diesel", "Škoda Superb");
dieselCar.logCarProperties();

const electricCar = new CarBlueprint("Modrá", "EV 160kW", "Elektřina", "Blesk");
electricCar.logCarProperties();
