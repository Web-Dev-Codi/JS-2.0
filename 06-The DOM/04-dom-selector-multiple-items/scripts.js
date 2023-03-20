// querySelectorALL()

const listItems = document.querySelectorAll(".item");

// outputs an array like structure
console.log(listItems);

// Access indidvidual elements

console.log(listItems[1].innerText);

// changew style on a specific node item

listItems[1].style.color = "red";

// forEach loop

listItems.forEach((item, index) => {
	item.style.color = "red";

	if (index === 1) {
		item.remove();
	}

	if (index === 0) {
		item.innerHTML = ` Get It Done Bro 
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
	}
});
