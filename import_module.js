//import { hello_1, hello_2 } from "./module.js";
import * as ModuleObject from "./module.js";

console.log(
  "-----------------------------------------------------------------------------"
);
console.log("Fater import module");

console.log(ModuleObject.hello_1());
console.log(ModuleObject.hello_2());

const hModule = document.querySelector("#moduletitle");
hModule.innerHTML = ModuleObject.hello_1() + " " + ModuleObject.hello_2();
