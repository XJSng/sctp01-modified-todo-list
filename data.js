let packingList = []
const BASE_JSON_BIN_URL = "https://api.jsonbin.io/v3"
const BIN_ID = "65334edf0574da7622bbaa49"
// A negative example as this KEY is not secure
const MASTER_KEY = "$2a$10$XKRJGtpbSpmbwNueucnfAOXoJCELf6m/FffhwEoHWnxsrh7ChCU2C"

//load all the clothes from the bin
// according to JSONBIN documentation, reading from a bin use the GET request type
async function loadClothes() {
  const response = await axios.get(`${BASE_JSON_BIN_URL}/b/${BIN_ID}/latest`)
  return response.data.record;
}


async function saveClothes(packingList) {
  //axios.put got at least 3 arguments
  // 1st argument: the URL of the endpoint
  // 2nd argument: what to send to the endpoint
  // 3rd argument (option): headers (headers are like metadata on where to send the data)
  const response = await axios.put(`${BASE_JSON_BIN_URL}/b/${BIN_ID}`, packingList, {
    "Content-Type": "application/json",
    "X-Master-Key": MASTER_KEY
  })
  return response.data
}


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
    if (packingList[i].id == id) {
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
function packingListTotal(packingList) {
  return packingList.length
}
// TEST TO MAKE SURE THIS WORKS
function qtyIncreaseOnly(packingList, newQty) {
  return ++packingList[newQty]
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
