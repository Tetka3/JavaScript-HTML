const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://images.pexels.com/photos/1187822/pexels-photo-1187822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 40,
      cat: "Dress",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://images.pexels.com/photos/47856/rolex-wrist-watch-clock-gmt-47856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 16,
      cat: "Watch",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 74,
      cat: "Watch",
    },
    {
        id: 6,
        name: "DressMaker",
        img: "https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg",
        price: 74,
        cat: "Dress",
      },
      {
        id: 7,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 74,
        cat: "Dress",
      },
  ];
  
  const productsContainer = document.querySelector(".products");
  const searchInput = document.querySelector(".search");
  const categoriesContainer = document.querySelector(".cats");
  const priceRange = document.querySelector(".priceRange");
  const priceValue = document.querySelector(".priceValue");
  
  const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts
      .map(
        (product) =>
          `
         <div class="product">
            <img
            src=${product.img}
            alt=""
            />
            <span class="name">${product.name}</span>
            <span class="priceText">$${product.price}</span>
          </div>
      `
      )
      .join("");
  };
  
  displayProducts(data);
  
  searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
  
    if (value) {
      displayProducts(
        data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
      );
    } else {
      displayProducts(data);
    }
  });
  
  const setCategories = () => {
    const allCats = data.map((item) => item.cat);
    const categories = [
      "All",
      ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i;
      }),
    ];
  
    categoriesContainer.innerHTML = categories
      .map(
        (cat) =>
          `
        <span class="cat">${cat}</span>
      `
      )
      .join("");
  
    categoriesContainer.addEventListener("click", (e) => {
      const selectedCat = e.target.textContent;
  
      selectedCat === "All"
        ? displayProducts(data)
        : displayProducts(data.filter((item) => item.cat === selectedCat));
    });
  };
  
  const setPrices = () => {
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
  
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;
  
    priceRange.addEventListener("input", (e) => {
      priceValue.textContent = "$" + e.target.value;
      displayProducts(data.filter((item) => item.price <= e.target.value));
    });
  };
  
  setCategories();
  setPrices();