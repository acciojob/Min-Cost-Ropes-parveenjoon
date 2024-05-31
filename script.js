function mincost(arr) {
  // Sort the array of rope lengths in ascending order
  arr.sort((a, b) => a - b);
  
  let totalCost = 0;
  
  // Iterate through the array and repeatedly connect the two shortest ropes
  while (arr.length > 1) {
    // Remove the two shortest ropes from the array
    let first = arr.shift();
    let second = arr.shift();
    
    // Calculate the cost of connecting the two ropes and add it to the total cost
    let cost = first + second;
    totalCost += cost;
    
    // Insert the connected rope back into the array
    arr.push(cost);
    
    // Sort the array again to maintain the order of rope lengths
    arr.sort((a, b) => a - b);
  }
  
  return totalCost;
}

module.exports = mincost;
