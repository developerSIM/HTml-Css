const itemTag = ` <div class="item">
            <img src="${item.src}" alt=""/>
            <div class="info">
                <span class="brand">${item.brand}</span>
                <span class="name">${item.name}</span>
                <span class="price">${item.price}</span>
            </div>
        </div>`;

        const box = document.querySelector(".box");
        clothes.forEach(element => {
           box.insertAdjacentHTML("beforeend", itemTag(x));
        });

