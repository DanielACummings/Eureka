/* TODOS
Turn all 4 upgrades into two dictionaries?

Make methods collectAutoUpgrades & automaticUpgrade ?
*/


// data
let totalGold = 25

// objects
let pickaxeOb = {
  quantity: 0,
  price: 25,
  multiplier: 10,
  buyOn: 0
}

let cartOb = {
  quantity: 0,
  price: 100,
  multiplier: 20,
  buyOn: 0
}

let minerOb = {
  quantity: 1,
  price: 1000,
  multiplier: 30,
  buyOn: 0
}

let shaftOb = {
  quantity: 1,
  price: 2000,
  multiplier: 40,
  buyOn: 0
}

// functions

// generates gold by clicking pic
function mine() {
  totalGold += 1

  if (pickaxeOb.multiplier > 0) {
    totalGold += pickaxeOb.quantity * pickaxeOb.multiplier
  }

  if (cartOb.multiplier > 0) {
    totalGold += cartOb.quantity * cartOb.multiplier
  }
}

function mineMulti(multi) {
  totalGold += multi
}

// updates totalGold
function drawGold() {
  document.querySelector("#gold-grams").innerHTML = `
  Gold Grams: ${totalGold}`
}

// auto functions
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

// buy button functions
function buyPickaxe() {
  if (totalGold > pickaxeOb.price) {
    pickaxeOb.quantity++
    document.querySelector("#pickaxe-count").innerHTML = `Pickaxes: ${pickaxeOb.quantity}`

    totalGold -= pickaxeOb.price
    document.querySelector("#gold-grams").innerHTML = `Gold Grams: ${totalGold}`

    pickaxeOb.price *= 1.1
    document.querySelector("#pickaxe-price").innerHTML = `Gold Grams: ${pickaxeOb.price}`
  }
}

function buyCart() {
  if (totalGold > cartOb.price) {
    cartOb.quantity++
    document.querySelector("#cart-count").innerHTML = `Carts: ${cartOb.quantity}`

    totalGold -= cartOb.price
    document.querySelector("#gold-grams").innerHTML = `Gold Grams: ${totalGold}`

    cartOb.price *= 1.1
    document.querySelector("#cart-price").innerHTML = `Gold Grams: ${cartOb.price}`
  }
}

function buyMiner() {
  if (totalGold > minerOb.price) {
    minerOb.quantity++
    document.querySelector("#miner-count").innerHTML = `Miners: ${minerOb.quantity}`

    totalGold -= minerOb.price
    document.querySelector("#gold-grams").innerHTML = `Gold Grams: ${totalGold}`

    minerOb.price *= 1.1
    document.querySelector("#miner-price").innerHTML = `Gold Grams: ${minerOb.price}`
  }
}

function buyShaft() {
  if (totalGold > shaftOb.price) {
    shaftOb.quantity++
    document.querySelector("#shaft-count").innerHTML = `Mine Shafts: ${shaftOb.quantity}`

    totalGold -= shaftOb.price
    document.querySelector("#gold-grams").innerHTML = `Gold Grams: ${totalGold}`

    shaftOb.price *= 1.1
    document.querySelector("#shaft-price").innerHTML = `Gold Grams: ${shaftOb.price}`
  }
}