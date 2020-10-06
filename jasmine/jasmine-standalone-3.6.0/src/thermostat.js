class Thermostat {
  constructor() {
   this.currentTemp = 20;
   this.MIN_LIMIT = 10;
   this.MAX_LIMIT_PSM_ON = 25;
   this.MAX_LIMIT_PSM_OFF = 32;
   this.powerSavingMode = true;
  }
  up() {
    if(this.currentTemp < this.maximumTemp()) {
    this.currentTemp++;
    }
  }
  down() {
    if(this.currentTemp > this.MIN_LIMIT){
    this.currentTemp--; 
    }
  }
  powerSavingOff() {
    this.powerSavingMode = false;
  }
  powerSavingOn() {
    this.powerSavingMode = true;
  }
  reset() {
    this.currentTemp = 20;
  }
  currentEnergyUsage() {
    if(this.currentTemp < 18) {
      return 'low-usage'
    } else if(this.currentTemp <= 25) {
      return 'medium-usage'
    } else {
      return 'high-usage'
    }
  }
  maximumTemp() {
    if(this.powerSavingMode === true) {
      return this.MAX_LIMIT_PSM_ON;
    } else {
      return this.MAX_LIMIT_PSM_OFF;
    }
  }
  getCurrentTemp() {
    return this.currentTemp;
  }
}