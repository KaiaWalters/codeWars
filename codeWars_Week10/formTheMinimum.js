const minValue = (values) => {
  let sorted = values.sort();
  let lowestNums = [];

  for(let i=0; i<sorted.length; i++) {
    if(lowestNums.indexOf(sorted[i]) === -1) {
      lowestNums.push(sorted[i]);
    }
  }

  return Number(lowestNums.join(""));
}
