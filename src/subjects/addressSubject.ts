import { Subject } from "./subject";
class AddressSubject extends Subject {
  constructor(
    name: string,
    ocNumber: string,
    ctsNumber: string,
    buildingName: string,
    address: string,
    suburb: string,
    state: string
  ) {
    let subLine = "";
    switch (state.toLocaleLowerCase()) {
      case "vic":
      case "victoria":
        subLine = "OC " + ocNumber + " - " + buildingName + address + ", " + suburb;
        break;
      case "qld":
      case "queensland":
        subLine = "CTS " + ctsNumber + " - " + buildingName + address + ", " + suburb;
        break;
      default:
        subLine = "Not Valid";
        break;
    }
    super(name, subLine);
  }
}
