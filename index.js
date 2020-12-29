const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const win = array.find(game => game.result === "W")
  return win ? win.year : undefined 
}
