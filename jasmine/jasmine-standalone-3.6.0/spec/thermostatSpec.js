
describe('Thermostat', function() {
beforeEach(function() {
thermostat = new Thermostat
});
  it('returns current temp of 20deg', function() {
    expect(thermostat.currentTemp).toEqual(20)
  })

  describe('up', function() {

    it('increases the temperature', function() {
      thermostat.up();
      expect(thermostat.currentTemp).toEqual(21)
    })
    it('will not increase temp above 25 with powersaving on', function() {
      var i = 6;
      while(i > 0){
        i--;
        thermostat.up();
      }
      expect(thermostat.currentTemp).toEqual(25)
    })
  })
  describe('down', function() {
    it('decreases the temp by 1', function() {
      thermostat.down();
      expect(thermostat.currentTemp).toEqual(19)
    })
    it('cant reduce temperature below 10', function() {
      var i = 12
      while(i > 0){
        i--;
        thermostat.down(); 
      }
      expect(thermostat.currentTemp).toEqual(10);
    });
  })
  
});
