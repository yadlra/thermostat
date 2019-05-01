
describe('Thermostat', function() {
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

 describe('initialization', function() {
  it('starts at 20 degrees', function (){
   expect(thermostat.getTemperature()).toEqual(20);
  });
 });

 describe('change temperature', function() {
   describe('increase temperature', function() {
     it('increase the temperature by one degree', function() {
       thermostat.tempUp();
       expect(thermostat.getTemperature()).toEqual(21);
     });
     it('increase the temperature by two degrees', function() {
       thermostat.tempUp();
       thermostat.tempUp();
       expect(thermostat.getTemperature()).toEqual(22);
     });
   });
   describe('decrease temperature', function() {
     it('decrease the temperature by one degree', function() {
       thermostat.tempDown();
       expect(thermostat.getTemperature()).toEqual(19);
     });
     it('decrease the temperature by two degrees', function() {
       thermostat.tempDown();
       thermostat.tempDown();
       expect(thermostat.getTemperature()).toEqual(18);
     });
     it('stops decreasing when minimum temperature is reached', function() {
       for (var i = 20; i > 10; i--) {
         thermostat.tempDown();
       }
       expect(() => {
         thermostat.tempDown()}
       ).toThrowError(RangeError,'Minimum temperature reached!');
       });
     });
   });

   describe('power saving mode', function() {
     describe('is on or off', function() {
       it('is on by default', function() {
         expect(thermostat.isPowerSaving()).toEqual(true);
       });
       it('can be turned off', function() {
         thermostat.powerSavingOff();
         expect(thermostat.powerSaving).toEqual(false);
       });
       it('can be turned on', function() {
         thermostat.powerSavingOff();
         thermostat.powerSavingOn();
         expect(thermostat.powerSaving).toEqual(true);
       });
     });
   });
});
