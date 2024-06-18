let obj;
onload();

function onload(){
    loadBagItemsobjects();
    displayBagItems();
}
function loadBagItemsobjects(){
   obj= bagarray.map(itemid=>{
        for(let i=0;i<items.length;i++){
            if(itemid==items[i].id){
                return items[i];// Npw the concept is clear . it is seraching each item id in bag with every id in items and returning the matching item based on item id
            }
        }

    })
}
function displayBagItems(){
    let container=document.querySelector('.bag-items-container');
    let innerhtml='';
    obj.forEach(bagitem => {
        innerhtml+=generateitemhtml(bagitem);
    });
    container.innerHTML=innerhtml;
}
function removeFromBag(itemid){
bagarray=bagarray.filter(bagitemid=>bagitemid!=itemid);
localStorage.setItem('bagarray', JSON.stringify(bagarray));
loadBagItemsobjects();
displaycount();
displayBagItems();
}
function generateitemhtml(item){
return    `<div class="bag-item-container">
<div class="item-left-part">
  <img class="bag-item-img" src="../${item.image}">
</div>
<div class="item-right-part">
  <div class="company">${item.company}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="price-container">
    <span class="current-price"> ${item.current_price}</span>
    <span class="original-price">${item.original_price}</span>
    <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
  </div>
  <div class="return-period">
    <span class="return-period-days">${item.return_period}</span> return available
  </div>
  <div class="delivery-details">
    Delivery by
    <span class="delivery-details-days">${item.delivery_date}</span>
  </div>
</div>

<div class="remove-from-cart" onclick="removeFromBag(${item.id});">X</div>
</div>`
}