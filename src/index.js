import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}
/*let doggy = {
  breed: "mauris",
  info:
}*/
let doggies = [];
doggies.push({ breed: "mauris", info: "long" });
console.log(doggies);

function initializeCode() {
  document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
}
