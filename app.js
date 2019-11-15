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

function buyPickaxe() {
  pickaxeUp.quantity++
  document.querySelector("#pickaxe").innerHTML = `
  Pickaxes: ${pickaxeUp.quantity}`
}

function buyCart() {
  cartUp.quantity++
  document.querySelector("#cart").innerHTML = `
  Carts: ${cartUp.quantity}`
}

function buyMiner() {
  minerUp.quantity++
  document.querySelector("#miner").innerHTML = `
  Miners: ${minerUp.quantity}`
}

function buyShaft() {
  shaftUp.quantity++
  document.querySelector("#shaft").innerHTML = `
  Mine Shafts: ${shaftUp.quantity}`
}