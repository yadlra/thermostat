var Thermostat = function() {
  this.temperature = 20;
};

Thermostat.prototype.tempUp = function () {
  this.temperature += 1;
};
