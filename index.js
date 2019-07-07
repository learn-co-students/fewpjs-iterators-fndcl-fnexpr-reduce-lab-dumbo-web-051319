const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
console.log("connected")

let totalBatteries = batteryBatches.reduce(function(total, battery){
  return total + battery
}, 0)

console.log(totalBatteries)
