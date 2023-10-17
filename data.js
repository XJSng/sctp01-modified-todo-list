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


function modifyPackingListItem(packingList, id, newName, newClothesType, newQty) {
  // Create variable for incoming new item
  let modifyItem = {
    "id": id,
    "name": newName,
    "newClothesType": newClothesType,
    "newQty": newQty
  }
// look for the matching "id"
const indexToReplace = packingList.findIndex(t => t.id == id)
}
if (indexToReplace > -1) {
  packingList[indexToReplace] = modifyItem
}

