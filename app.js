// data

let totalGold = 0

let pickaxeUp = {
  quantity: 0,
  price: 50,
  multiplier: 10
}

let cartUp = {
  quantity: 0,
  price: 100,
  multiplier: 20
}

let minerUp = {
  quantity: 0,
  price: 1000,
  multiplier: 50
}

let shaftUp = {
  quantity: 0,
  price: 2000,
  multiplier: 100
}

// functions

// generates gold by clicking pic
function mine() {
  totalGold += 1
}

// updates totalGold
function updateGoldDis() {
  document.querySelector("#gold-grams").innerHTML = `
  Gold Grams: ${totalGold}`
}

// buying functions. after completion, make buy_() functions dynamic, & fire 2 functions per buy click. One will update data, & the other will re-render the page
function buyPickaxe() {
  pickaxeUp.quantity++
  document.querySelector("#pickaxe-count").innerHTML = `
  Pickaxes: ${pickaxeUp.quantity}`

  pickaxeUp.price *= 1.1
  document.querySelector("#pickaxe-price").innerHTML = `
  Gold Grams: ${pickaxeUp.price}`
}

function buyCart() {
  cartUp.quantity++
  document.querySelector("#cart-count").innerHTML = `
  Carts: ${cartUp.quantity}`

  cartUp.price *= 1.1
  document.querySelector("#cart-price").innerHTML = `
  Gold Grams: ${cartUp.price}`
}

function buyMiner() {
  minerUp.quantity++
  document.querySelector("#miner-count").innerHTML = `
  Miners: ${minerUp.quantity}`

  minerUp.price *= 1.1
  document.querySelector("#miner-price").innerHTML = `
  Gold Grams: ${minerUp.price}`
}

function buyShaft() {
  shaftUp.quantity++
  document.querySelector("#shaft-count").innerHTML = `
  Mine Shafts: ${shaftUp.quantity}`

  shaftUp.price *= 1.1
  document.querySelector("#shaft-price").innerHTML = `
  Gold Grams: ${shaftUp.price}`
}