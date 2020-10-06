'use strict';

describe('Thermostat', function() {
  var thermostat;
beforeEach(function() {
  thermostat = new Thermostat
});
  it('returns current temp of 20deg', function() {
    expect(thermostat.getCurrentTemp()).toEqual(20)
  })

  describe('up', function() {

    it('increases the temperature', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemp()).toEqual(21)
    })
    it('will not increase temp above 25 with powersaving on', function() {
      var i = 6;
      while(i > 0){
        i--;
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(25)
    })
    it('will not increase tempt above 32 with powersaving off', function() {
      thermostat.powerSavingOff()
      var i = 14;
      while(i > 0){
        i--;
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(32)
    })
  })
  describe('down', function() {
    it('decreases the temp by 1', function() {
      thermostat.down();
      expect(thermostat.getCurrentTemp()).toEqual(19)
    })
    it('cant reduce temperature below 10', function() {
      var i = 12
      while(i > 0){
        i--;
        thermostat.down(); 
      }
      expect(thermostat.getCurrentTemp()).toEqual(10);
    });
  })
  describe('powerSavingOff', function() {
    it('turns the power saving mode off', function() {
      thermostat.powerSavingOff();
      expect(thermostat.powerSavingMode).toEqual(false)
    })
  })

  describe('powerSavingOn', function() {
    it('turns the power saving mode on', function() {
      thermostat.powerSavingOff();
      thermostat.powerSavingOn();
      expect(thermostat.powerSavingMode).toEqual(true)
    })
  })

  describe('maximumTemp', function() {
    it('returns 25 if power saving mode is on', function() {
      expect(thermostat.maximumTemp()).toEqual(25);
    })
    it('returns 32 if power saving mode is off', function() {
      thermostat.powerSavingOff()
      expect(thermostat.maximumTemp()).toEqual(32);
    })
  })

  describe('reset', function() {
    it('resets the current temperature to 20', function() {
      thermostat.up()
      thermostat.reset()
      expect(thermostat.currentTemp).toEqual(20)
    })
  })

  describe('currentEnergyUsage', function() {
    it('returns low-usage when temperate is < 18', function() {
      thermostat.currentTemp = 16;
      expect(thermostat.currentEnergyUsage()).toEqual('low-usage')
    })
    it('returns medium-usage when temperate is <= 25', function() {
      thermostat.currentTemp = 25;
      expect(thermostat.currentEnergyUsage()).toEqual('medium-usage')
    })
    it('returns high-usage when temperate is > 25', function() {
      thermostat.currentTemp = 26;
      expect(thermostat.currentEnergyUsage()).toEqual('high-usage')
    })
  })
  
});
