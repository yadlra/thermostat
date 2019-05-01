var Thermostat = function() {
  this.temperature = 20;
  this.MINIMUN_TEMPERATURE = 10;
};

Thermostat.prototype.getTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.tempUp = function () {
  this.temperature += 1;
};

Thermostat.prototype.tempDown = function () {
  if (this.temperature === this.MINIMUN_TEMPERATURE) {
    throw new TypeError('Minimum temperature reached!');
  };
  this.temperature -= 1;
};
