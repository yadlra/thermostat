
describe('Thermostat', function() {
  var thermostat;
 describe('initialization', function() {
  it('starts at 20 degrees', function (){
   thermostat = new Thermostat ();
   expect(thermostat.getTemperature()).toEqual(20);
  });
 });

 describe('change temperature', function() {
   describe('increase temperature', function() {
     it('increase the temperature by one degree', function() {
       thermostat = new Thermostat ();
       thermostat.tempUp();
       expect(thermostat.getTemperature()).toEqual(21);
     });
     it('increase the temperature by two degrees', function() {
       thermostat = new Thermostat ();
       thermostat.tempUp();
       thermostat.tempUp();
       expect(thermostat.getTemperature()).toEqual(22);
     });
   });
   describe('decrease temperature', function() {
     it('decrease the temperature by one degree', function() {
       thermostat = new Thermostat ();
       thermostat.tempDown();
       expect(thermostat.getTemperature()).toEqual(19);
     });
     it('decrease the temperature by two degrees', function() {
       thermostat = new Thermostat ();
       thermostat.tempDown();
       thermostat.tempDown();
       expect(thermostat.getTemperature()).toEqual(18);
     });
     it('stops decreasing when minimum temperature is reached', function() {
       thermostat = new Thermostat();
       for (var i = 20; i > 10; i--) {
         thermostat.tempDown();
       }
       expect(() => {
         thermostat.tempDown()}
       ).toThrowError(TypeError,'Minimum temperature reached!');
     });
   });
 });
});
