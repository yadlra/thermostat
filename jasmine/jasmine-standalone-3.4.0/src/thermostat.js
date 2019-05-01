var Thermostat = function() {
  this.temperature = 20;
};

Thermostat.prototype.tempUp = function () {
  this.temperature += 1;
};

Thermostat.prototype.tempDown = function () {
  this.temperature -= 1;
};
