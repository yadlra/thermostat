var Thermostat = function() {
  this.temperature = 20;
  this.MINIMUN_TEMPERATURE = 10;
  this.powerSaving = true;
};

Thermostat.prototype.isPowerSaving = function () {
  return this.powerSaving;
};

Thermostat.prototype.powerSavingOff = function () {
  this.powerSaving = false;
};

Thermostat.prototype.getTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.tempUp = function () {
  this.temperature += 1;
};

Thermostat.prototype.tempDown = function () {
  if (this.temperature === this.MINIMUN_TEMPERATURE) {
    throw new RangeError('Minimum temperature reached!');
  };
  this.temperature -= 1;
};
