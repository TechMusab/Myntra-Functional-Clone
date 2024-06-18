let container=document.querySelector('.items-container');
let innerhtml='';
items.forEach(item=>{
  innerhtml+= ` 
   <div class="items">
    <img class="image-class" src="${item.image}" alt="Item image">
    <div class="rating">
        ${item.rating.stars} ⭐|${item.rating.count}
    </div>
    <div class="company-name">
        ${item.company}
    </div>
    <div class="item-name">
       ${item.item_name}
    </div>
    <div class="pricing">
        <span class="current-price">
            ${item.current_price}
        </span>
        <span class="old-price">
            ${item.original_price}
        </span>
        <span class="discount">
           (${item.discount_percentage}%)
        </span>
        </div>
        <button class="add-to-bag-btn">
            Add to Bag
        </button>
    </div>
`
});
container.innerHTML=innerhtml;