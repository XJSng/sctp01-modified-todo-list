document.addEventListener("DOMContentLoaded", function () {
    // Create the form overlay
    const formOverlay = document.querySelector('#form-overlay')
    const form = document.querySelector("#data-form")
    // hide the form
    formOverlay.style.display = "block"
    form.addEventListener("submit", function (e) {
        e.preventDefault()
        const dateInput = document.querySelector("#date-input").value
        const locationInput = document.querySelector("#location-input").value
        // hide the form after it is submitted
        formOverlay.style.display = "none"
        // Using the form input create a countdown timer
        const countdownDisplay = document.querySelector("#countdownDisplay")
        function addCountdown(locationInput, dateInput) {
            //function that will calculate time left to travel date
            // const date = new Date()
            // let day = date.getDate()
            // let month = date.getMonth() + 1;
            // let year = date.getFullYear();
            // let currentDate = [year,month,day]
            //Because dateInput is a string, we need to make it an array


            // Take the remaining Dates minus the currentDate
            //let remainingDate = dateInput - currentDate
            // append div to header div
            const timeDiv = document.createElement("div")
            timeDiv.innerHTML = `Going to ${locationInput} on ${dateInput}`
            countdownDisplay.appendChild(timeDiv)
        }
        // Call the add countdown function
        addCountdown(locationInput, dateInput)
    })

    async function main() {
        // Ask User for travel location and date of travel
        // Return date to travel and travel location in index
        let packingList = await loadClothes()
        renderPackingItems(packingList)

        // add item function
        const addItemButton = document.querySelector("#addItem")
        addItemButton.addEventListener("click", function () {
            const itemNameInput = document.querySelector('#itemName')
            const itemName = itemNameInput.value

            const itemTypeSelect = document.querySelectorAll('.itemType')
            const itemType = itemTypeSelect.value

            const itemQtySelect = document.querySelector('#itemQty')
            const itemQty = itemQtySelect.value

            if (itemName) {
                addToPackingList(packingList, itemName, itemType, itemQty);
                renderPackingItems(packingList)
                itemNameInput.value = '';
            }
        })
        // Save button function to database
        const saveButton = document.querySelector("#save-btn")
        saveButton.addEventListener("click", async function () {
            await saveClothes(packingList);
            alert("Packing list has been saved")
        })

        // Sample data
        /*
        addToPackingList(packingList, "shirt", "t-shirt", 2)
        addToPackingList(packingList, "black-shorts", "shorts", 2)
        addToPackingList(packingList, "socks", "socks", 3)
        addToPackingList(packingList, "adidas-sneakers", "shoes", 2)
        modifyPackingListItem(packingList, packingList[2].id, "shirt", "t-shirt", 1)
        console.log(packingList)
        renderPackingItems(packingList)
        */
    }

    // renderPackingItems function
    function renderPackingItems(packingList) {
        const displayPackingList = document.querySelector("#displayPackingList");
        displayPackingList.innerHTML = '';
        let count = 1
        for (let each of packingList) {
            const newDiv = document.createElement("div");
            newDiv.className = 'd-flex flex-wrap align-items-center p-2 border border-dark'
            newDiv.innerHTML = `<div class="ps-1" id="count">${count}</div>
            <label class="list-group-item border-0 me-auto">
              <input class="form-check-input me-1 p-2 " type="checkbox" value="">
              x${each.qty} - ${each.name}</label>
            <div class="p-1"><button type="button" class="btn btn-primary btn-sm edit-btn">Edit</button></div>
            <div class="p-1"><button type="button" class="btn btn-danger btn-sm delete-btn">Delete</button></div>`
            count++
            displayPackingList.appendChild(newDiv)
            // Add button
            // <div class="p-1"><button type="button" class="btn btn-success btn-sm count-btn">${each.qty}</button></div>

            // Edit array button
            newDiv.querySelector(".edit-btn").addEventListener("click", function () {
                const newName = prompt(`Enter the new item to replace ${each.item}: `, each.name)
                const newItemType = prompt("What type of item is it: ", each.itemType)
                const newQty = prompt("Enter the new item: ", each.qty)
                modifyPackingListItem(packingList, each.id, newName, newItemType, newQty)
                renderPackingItems(packingList)
            })
            // Delete item buttton
            newDiv.querySelector(".delete-btn").addEventListener("click", function () {
                const confirmation = confirm(`Do you want to delete this item: ${each.name}?`)
                if (confirmation) {
                    deleteListItem(packingList, each.id)
                    renderPackingItems(packingList)
                }
            })
            // Checkbox is backed
            let checkbox = newDiv.querySelector(".form-check-input")
            if (checkbox.checked) {
                // 
                alert("you checked this box")
//                newDiv.id.add("flexCheckDisabled")
            }
            // Add count button TESTING REQUIRED

            // newDiv.querySelector(".count-btn").addEventListener("click", function () {
            //     qtyIncreaseOnly(packingList)
            //     renderPackingItems(packingList)
            // })

        }
    }


    //  Call main function
    main()
})