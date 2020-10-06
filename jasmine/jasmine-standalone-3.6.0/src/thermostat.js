class Thermostat {
  constructor() {
   this.currentTemp = 20;
   this.minimumTemp = 10;
   this.maximumTemp = 25;
   this.powerSavingModeOn = true;
  }
  up() {
    if(this.currentTemp < this.maximumTemp) {
    this.currentTemp++;
    }
  }
  down() {
    if(this.currentTemp > 10){
    this.currentTemp--; 
    }
  }
}