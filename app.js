/* TODO
Turn all 4 upgrades into two dictionaries?

Make methods collectAutoUpgrades & automaticUpgrade ?

Make buy buttons disable = false once sufficient funds are reached

Make pickaxes multiply click yield

Make carts multiply click yield
*/


// data

let totalGold = 0

// variables for disabling
let pickaxeDis = document.querySelector("#pickaxe-dis")
let cartDis = document.querySelector("#cart-dis")
let minerDis = document.querySelector("#miner-dis")
let shaftDis = document.querySelector("#shaft-dis")

// objects
let pickaxeOb = {
  quantity: 0,
  price: 50,
  multiplier: 10
}

let cartOb = {
  quantity: 0,
  price: 100,
  multiplier: 20
}

let minerOb = {
  quantity: 1,
  price: 1000,
  multiplier: 30
}

let shaftOb = {
  quantity: 1,
  price: 2000,
  multiplier: 40
}

// functions

// generates gold by clicking pic
function mine() {
  totalGold += 1
}

function mineMulti(multi) {
  totalGold += multi
}

// updates totalGold
function updateGoldDis() {
  document.querySelector("#gold-grams").innerHTML = `
  Gold Grams: ${totalGold}`
}

// auto functions
// FIX: effectively increment, but don't draw to page every 3 seconds

function autoMiner() {
  if (minerOb.quantity > 0) {
    setInterval(function () { mineMulti(minerOb.quantity * minerOb.multiplier) }, 1000)
  }
}

function autoShaft() {
  if (shaftOb.quantity > 0) {
    setInterval(function () { mineMulti(shaftOb.quantity * shaftOb.multiplier) }, 1000)
  }
}

function autoDrawGold() {
  setInterval(function () { document.querySelector("#gold-grams").innerHTML = `Gold Grams: ${totalGold}` }, 1000)
}

// buying functions. after completion, make buy_() functions dynamic, & fire 2 functions per buy click. One will update data, & the other will re-render the page

// butten enabling functions
function enablePickaxe() {
  if (totalGold > pickaxeOb.price) {
    pickaxeDis.setAttribute("disabled", "false")
  }
}

function enableCart() {
  if (totalGold > cartOb.price) {
    cartDis.setAttribute("disabled", "false")
  }
}

function enableMiner() {
  if (totalGold > minerOb.price) {
    minerDis.setAttribute("disabled", "false")
  }
}

function enableShaft() {
  if (totalGold > shaftOb.price) {
    shaftDis.setAttribute("disabled", "false")
  }
}

// buy button functions
function buyPickaxe() {
  if (totalGold < pickaxeOb.price) {
    pickaxeDis.setAttribute("disabled", "true")
  }
  // else {
  //   pickaxeDis.setAttribute("disabled", "false")
  // }

  pickaxeOb.quantity++
  document.querySelector("#pickaxe-count").innerHTML = `Pickaxes: ${pickaxeOb.quantity}`

  totalGold -= pickaxeOb.price
  document.querySelector("#gold-grams").innerHTML = `Gold Grams: ${totalGold}`

  pickaxeOb.price *= 1.1
  document.querySelector("#pickaxe-price").innerHTML = `Gold Grams: ${pickaxeOb.price}`
}

function buyCart() {
  if (totalGold < cartOb.price) {
    cartDis.setAttribute("disabled", "true")
  }
  // else {
  //   cartDis.setAttribute("disabled", "false")
  // }

  cartOb.quantity++
  document.querySelector("#cart-count").innerHTML = `Carts: ${cartOb.quantity}`

  totalGold -= cartOb.price
  document.querySelector("#gold-grams").innerHTML = `Gold Grams: ${totalGold}`

  cartOb.price *= 1.1
  document.querySelector("#cart-price").innerHTML = `Gold Grams: ${cartOb.price}`
}

function buyMiner() {
  if (totalGold < minerOb.price) {
    minerDis.setAttribute("disabled", "true")
  }
  // else {
  //   minerDis.setAttribute("disabled", "false")
  // }

  minerOb.quantity++
  document.querySelector("#miner-count").innerHTML = `Miners: ${minerOb.quantity}`

  totalGold -= minerOb.price
  document.querySelector("#gold-grams").innerHTML = `Gold Grams: ${totalGold}`

  minerOb.price *= 1.1
  document.querySelector("#miner-price").innerHTML = `Gold Grams: ${minerOb.price}`
}

function buyShaft() {
  if (totalGold < pickaxeOb.price) {
    shaftDis.setAttribute("disabled", "true")
  }
  // else {
  //   shaftDis.setAttribute("disabled", "false")
  // }

  shaftOb.quantity++
  document.querySelector("#shaft-count").innerHTML = `Mine Shafts: ${shaftOb.quantity}`

  totalGold -= shaftOb.price
  document.querySelector("#gold-grams").innerHTML = `Gold Grams: ${totalGold}`

  shaftOb.price *= 1.1
  document.querySelector("#shaft-price").innerHTML = `Gold Grams: ${shaftOb.price}`
}