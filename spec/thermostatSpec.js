
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
   describe('reset temperature', function(){
     it('resets temperature to 20', function(){
       thermostat.reset();
       expect(thermostat.getTemperature()).toEqual(20);
     });
   });
   describe('checks current energy usage', function(){
     it('gives low energy usage below 18', function(){
       thermostat.temperature = 17;
       expect(thermostat.usage()).toEqual('low-usage');
     });
     it('gives medium energy usage below 25', function(){
       thermostat.temperature < 25;
       expect(thermostat.usage()).toEqual('medium-usage');
     });
     it('gives high usage if anything else', function(){
       thermostat.temperature = 30;
       expect(thermostat.usage()).toEqual('high-usage');
     });
   });
});
