const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}
function destructivelyRemoveFirstDriver() {
  drivers.shift();
}
function destructivelyRemoveLastDriver() {
  drivers.pop()
}
function appendDriver(name) {
  drivers.splice(3, 0, name)
}
function prependDriver(name) {

}
