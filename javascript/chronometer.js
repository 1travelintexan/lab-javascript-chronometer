class Chronometer {
  constructor() {
  this.currentTime = 0
  this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++
     
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
  twoDigitsNumber(nums) {
    if(nums >= 10 ){
      let newNum = `${nums}`
      return newNum
    }else if (nums < 10 && nums > 0){
      let newNum = `0${nums}`
      return newNum 
    }else if(nums == 0){
      return '00'
    }
  }

  stopClick() {
  clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }
  
  splitClick(nums) {
    let min = this.twoDigitsNumber(this.getMinutes())
    let sec = this.twoDigitsNumber(this.getSeconds())
    return `${min}:${sec}`
  }
}
