let bagarray;
onload();
function  onload(){
let str=localStorage.getItem('bagarray');
bagarray=str? JSON.parse(str): [];
displayitemsonhomepage();
displaycount();
}
function addToBag(itemID) {
bagarray= JSON.parse(localStorage.getItem('bagarray'));
  bagarray.push(itemID);
  console.log(bagarray);
  localStorage.setItem('bagarray', JSON.stringify(bagarray));
  displaycount();
}
function displaycount() {
let count= JSON.parse(localStorage.getItem('bagarray'));
  let countElement = document.querySelector(".count");
  if(count.length>0){
    countElement.style.visibility='visible';
    countElement.innerText =count.length;
  }
  else{
    countElement.style.visibility='hidden';
  }

}
function displayitemsonhomepage(){
let container = document.querySelector(".items-container");
if(!container){
    return;
}
let innerhtml = "";
items.forEach((item) => {
  innerhtml += ` 
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
        <button class="add-to-bag-btn" onclick="addToBag(${item.id})">
            Add to Bag
        </button>
    </div>
`;
});
container.innerHTML = innerhtml;
}
