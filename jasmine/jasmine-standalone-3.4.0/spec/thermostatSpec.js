
describe('Thermostat', function() {
  var thermostat;
 describe('initialization', function() {
  it('starts at 20 degrees', function (){
   thermostat = new Thermostat ();
   expect(thermostat.temperature).toEqual(20);
  });
 });

 describe('change temperature', function() {
   describe('increase temperature', function() {
     it('increase the temperature by one degree', function() {
       thermostat = new Thermostat ();
       thermostat.tempUp();
       expect(thermostat.temperature).toEqual(21);
     });
     it('increase the temperature by two degrees', function() {
       thermostat = new Thermostat ();
       thermostat.tempUp();
       thermostat.tempUp();
       expect(thermostat.temperature).toEqual(22);
     });
   });
   describe('decrease temperature', function() {
     it('decrease the temperature by one degree', function() {
       thermostat = new Thermostat ();
       thermostat.tempDown();
       expect(thermostat.temperature).toEqual(19);
     });
     it('decrease the temperature by two degrees', function() {
       thermostat = new Thermostat ();
       thermostat.tempDown();
       thermostat.tempDown();
       expect(thermostat.temperature).toEqual(18);
     });
   });
 });
});
