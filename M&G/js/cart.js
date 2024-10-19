const tablebody = document.getElementById("tablebody")
const totalprice = document.getElementById("totalprice")



let cartContainer = []
cartContainer = JSON.parse(localStorage.getItem("Cart"))

// cartContainer.forEach((pro) => {
for (let i = 0; i < cartContainer.length; i++) {
    var item__Name = cartContainer[i].itemName
    var item__price = cartContainer[i].itemprice
    console.log(item__Name)
    tablebody.innerHTML += `
<tr>
  <th scope="row">1</th>
  <td>${item__Name}</td>
  <td class="item-price">${item__price}</td>
  <td>1</td>
</tr>

`
}


var newCartContainer = []
var sum
for (let i = 0; i < cartContainer.length; i++) {
    newCartContainer.push(parseInt(cartContainer[i].itemprice))
}
console.log(newCartContainer)

var sum = 0;
for (let i = 0; i < newCartContainer.length; i++) {
    sum += newCartContainer[i];
}
totalprice.innerHTML = sum