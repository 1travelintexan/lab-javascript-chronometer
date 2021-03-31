class Chronometer {
  constructor() {
  this.currentTime = 0
  this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.time ++
      callback()
    },1000)
  }
  getMinutes() {
    if(this.currentTime == 0){
      return 0
    }else{
   let minutes = this.currentTime / 60
   return Math.floor(minutes) 
    }
    console.log(minutes)
  }
  getSeconds() {
    if(this.currentTime == 0){
      return 0
    }else{
  let seconds = this.currentTime % 60
  return seconds
    }
  }
  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
  clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick(nums) {
    if(nums >= 10 ){
      return num.toString(nums)
    }else if(nums < 10){
      return '0' + num.toString(nums)
    }
    
  }
}
