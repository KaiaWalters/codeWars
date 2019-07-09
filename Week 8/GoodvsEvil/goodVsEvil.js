



function goodVsEvil(good, evil){

  const goodValues = {
    hobbits: 1,
    men: 2,
    dwarves: 3,
    elves: 3,
    eagles:4,
    wizards: 10,
  }

  const arrayOfThings = Object.keys(goodValues);

  goodValues.forEach((key) => {
    console.log(key, goodValues[key])
  })
}
