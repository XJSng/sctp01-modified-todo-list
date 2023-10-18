document.addEventListener("DOMContentLoaded", function () {
    function main() {
        let packingList = []
        // Sample data
        addToPackingList(packingList, "shirt", "t-shirt", 2)
        addToPackingList(packingList, "black-shorts", "shorts", 2)
        addToPackingList(packingList, "socks", "socks", 3)
        addToPackingList(packingList, "adidas-sneakers", "shoes", 2)
        modifyPackingListItem(packingList, packingList[2].id, "shirt", "t-shirt", 1)
        console.log(packingList)
        renderPackingItems(packingList)
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
              ${each.name}</label>
              <div class="p-1"><button type="button" class="btn btn-success btn-sm">${each.qty}</button></div>
            <div class="p-1"><button type="button" class="btn btn-primary btn-sm">Edit</button></div>
            <div class="p-1"><button type="button" class="btn btn-danger btn-sm">Delete</button></div>`
            count++
            displayPackingList.appendChild(newDiv)
        }
    }


    //  Call main function
    main()
})