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
    "clothesType": newClothesType,
    "qty": newQty
  }
  // look for the matching "id"
  const indexToReplace = packingList.findIndex(t => t.id == id)
  if (indexToReplace > -1) {
    packingList[indexToReplace] = modifyItem
  } else {
    console.log(`Sorry but this does not match any items in the list.`)
  }
}

function deleteListItem(packingList, id) {
  let indexToDelete = null;
  for (let i = 0; i < packingList.length; i++) {
        //cycle through each id in packingList array
    if (packingList[i].id == id){
    indexToDelete = i;
    break;
  }
  }
  if (indexToDelete !== null) {
    packingList.splice(indexToDelete, 1);
  } else {
    console.log(`Item not found`);
  }
  }

  // A function to count packing list total
function packingListTotal (packingList) {
  return packingList.length
}

/*
// Test Code
addToPackingList(packingList, "shirt", "t-shirt", 2)
addToPackingList(packingList, "black-shorts", "shorts", 2)
addToPackingList(packingList, "socks", "socks", 3)
addToPackingList(packingList, "adidas-sneakers", "shoes", 2)
modifyPackingListItem(packingList, packingList[2].id, "shirt", "t-shirt", 1)
console.log(packingList)
/*
deleteListItem(packingList, 123)
deleteListItem(packingList, packingList[2].id)
console.log(packingList)
console.log(packingListTotal(packingList))
*/
