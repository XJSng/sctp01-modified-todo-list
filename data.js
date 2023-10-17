let packingList = []

function addToPackingList(packingList, name, clothesType, qty) {
  // Create a new item
  let newItem = {
    id: Math.floor(Math.random() * 1000 + 1), // assign a random id to the new item
    name: name,
    clothesType: clothesType,
    qty: parseInt(qty)
  }
  packingList.push(newItem);
}

addToPackingList(packingList, "shirt", "t-shirt", 2)
addToPackingList(packingList, "black-shorts", "shorts", 2)
addToPackingList(packingList, "socks", "socks", 3)
console.log(packingList)
