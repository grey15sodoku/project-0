const carditem = document.getElementById("card") /////////////////// CARD to Display API products
const category = document.getElementById("maincatergory")
const productDetails = document.getElementById("ProductDetailsContainer")


///////////////////////////////////////////////////////////////////

fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            username: 'kminchelle',
            password: '0lelplR',
            // expiresInMins: 60, // optional
        })
    })
    .then(res => res.json())

////////////////////////////////////////////////////////////
//////////////// Get product////////////////////////////////
///////////////////////////////////////////////////////////
let arraydata = []
let itemobj = {}

function products() {
    fetch('https://dummyjson.com/products/category/home-decoration')
        .then(function(response) {
            return response.json()
        })
        .then((response) => {
            apidata = response.products
            for (let pro of apidata) {

                carditem.innerHTML += `
            <div class='itemView'>
            <div class='card'>
              <div class="rating">
               <p><i class="fa-solid fa-star-half-stroke"></i> <span>${pro.rating}</span></p>
              </div>
            <a href='#' class='btn-fav'><i class="fa-solid fa-heart-circle-plus"></i>  </a>
            <div id="cardImg"  class="cardImg" onclick="getproduct(${pro.id})" >
            <img src="${pro.images[0]}" class='itemImg' alt='...'></div>
               
                 <div class='cardBody'>
                 <h5 class='cardTitle'>${pro.title}</h5>
                 <p class='cardCategory'>${pro.category}</p>
                 <p class='cardPrice'>${pro.price}<span>$</span></p>
                 <a href='#' id='addtocard' class='btn-cart'>Add To Cart <i class="fa-solid fa-cart-shopping"></i></a>
                 <p class='cardstock'> <span>${pro.stock}</span> item in stock</p>
             
      
                 </div>
                 
            </div>
            </div>`
            }
            const addtochart = document.querySelectorAll(".btn-cart")
            for (const btn of addtochart) {
                btn.addEventListener("click", (e) => {
                    e.preventDefault()

                    let itemName = e.target.parentElement.children[0].innerText;
                    let itemprice = e.target.parentElement.children[2].innerText;
                    itemobj["itemName"] = itemName
                    itemobj["itemprice"] = itemprice
                    arraydata.push(itemobj)
                    localStorage.setItem("Cart", JSON.stringify(arraydata))
                    console.log(arraydata)
                    itemobj = {}
                })

            }

        })
}

products()




function getproduct(id) {
    fetch(`https://dummyjson.com/products/${id}`)
        .then(function(response) {
            return response.json()

        })
        .then((response) => {
            carditem.style.display = "none"
            category.style.display = "none"
            console.log(response)
            document.documentElement.scrollTop = 0;
            productDetails.innerHTML += `
            <div class="row col-lg-4 col-md-6 col-sm-12">
            <div class="productImg">
                <img id="majorImg"
                    src="${response.thumbnail}"
                    alt="${response.title}" srcset="">
                <div class="minorimg">
                    <img src="${response.images[1]}" alt="${response.title}">
                    <img src="${response.images[2]}" alt="${response.title}">
                    <img src="${response.images[3]}" alt="${response.title}">

                </div>
            </div>
        </div>
        <div class="row  col-lg-4 col-md-6 col-sm-12">
            <div id="productDetails">

                <!--  -->
                <h2 id="productTitle">${response.title}</h2>
                <p id="Productcategory">${response.category}</p>
                <h3 id="productPrice">${response.price} <span>$</span></h3>
                <p id="description">
                ${response.description}
                </p>
               <div class="productrate">
                <i class="fa-solid fa-star-half-stroke"></i>
                <span>${response.rating}</span>
               </div>
                <div class="quantity">
                    <span>Quantity</span>
                    <div class="count">
                        <button class="btn-minor btn" id="inc"><i class="fa-solid fa-circle-plus"></i></button>
                        <input type="text">
                        <button class="btn-minor btn" id="dec"><i class="fa-solid fa-circle-minus"></i></button>

                    </div>
                    <p class="stock">${response.stock} item in Stock</p>
                    <button class="btn btn-major"><i class="fa-solid fa-cart-plus"></i> Add To chart</button>

                </div>
                <!-- /////// -->
            </div>
        </div>

            `
        })
}

//////////////////////////////////////////////////////////////
////////////////// Search For product  ///////////////////////
//////////////////////////////////////////////////////////////



const searchItem = document.getElementById("searchItem");
const searchItembtn = document.getElementById("searchItembtn")

searchItembtn.addEventListener("click", (e) => {
    e.preventDefault()
    fetch(`https://dummyjson.com/products/search?q=${searchItem.value}`)
        .then(function(response) {
            return response.json()
        })
        .then((response) => {
            apidata = response.products
            carditem.innerHTML = "";
            for (let pro of apidata) {

                carditem.innerHTML += `
        <div class='itemView'>
        <div class='card'>
          <div class="rating">
           <p><i class="fa-solid fa-star-half-stroke"></i> <span>${pro.rating}</span></p>
          </div>
        <a href='#' class='btn-fav'><i class="fa-solid fa-heart-circle-plus"></i>  </a>
        <div id="cardImg"  class="cardImg" onclick="getproduct(${pro.id})" >
        <img src="${pro.images[0]}" class='itemImg' alt='...'></div>
           
             <div class='cardBody'>
             <h5 class='cardTitle'>${pro.title}</h5>
             <p class='cardCategory'>${pro.category}</p>
             <p class='cardPrice'>${pro.price}<span>$</span></p>
             <a href='#' id='addtocard' class='btn-cart'>Add To Cart <i class="fa-solid fa-cart-shopping"></i></a>
             <p class='cardstock'> <span>${pro.stock}</span> item in stock</p>
         
  
             </div>
             
        </div>
        </div>`
            }

        })
})