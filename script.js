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
      price: 1200,
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
        img: "https://images.pexels.com/photos/9897908/pexels-photo-9897908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 2000,
        cat: "Luxury",
      },
      {
        id: 8,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.pexels.com/photos/9897906/pexels-photo-9897906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 1500,
        cat: "Luxury",
      },
      {
        id: 9,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 75,
        cat: "Dress",
      },
      {
        id: 10,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.pexels.com/photos/6055705/pexels-photo-6055705.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 1800,
        cat: "Luxury",
      },
      {
        id: 11,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.pexels.com/photos/9979199/pexels-photo-9979199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 100,
        cat: "Watch",
      },
      {
        id: 12,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.pexels.com/photos/6046183/pexels-photo-6046183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 100,
        cat: "Shoes",
      },
      {
        id: 13,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.pexels.com/photos/6046235/pexels-photo-6046235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 150,
        cat: "Shoes",
      },
      {
        id: 14,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.pexels.com/photos/2078107/pexels-photo-2078107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 150,
        cat: "Dress",
      },
      {
        id: 15,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.pexels.com/photos/2270078/pexels-photo-2270078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 150,
        cat: "Dress",
      },
      {
        id: 16,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 150,
        cat: "Coats",
      },
      {
        id: 17,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.pexels.com/photos/3951783/pexels-photo-3951783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 150,
        cat: "Coats",
      },
      {
        id: 20,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.pexels.com/photos/457418/pexels-photo-457418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 150,
        cat: "Cars",
      },
      {
        id: 21,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 150,
        cat: "Cars",
      },
      {
        id: 22,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "Shoes",
      },
      {
        id: 23,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1298&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "Shoes",
      },
      {
        id: 24,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "BackPack",
      },
      {
        id: 25,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "BackPack",
      },
      {
        id: 26,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "BackPack",
      },
      {
        id: 27,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "BackPack",
      },
      {
        id: 28,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.unsplash.com/photo-1591900947067-851789555ef3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "Coats",
      },
      {
        id: 28,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.unsplash.com/photo-1545912193-41b5212f30ee?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "Coats",
      },
      {
        id: 29,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "Jackets",
      },
      {
        id: 30,
        name: "Garmin Venu Smartwatch ",
        img: "https://plus.unsplash.com/premium_photo-1670035789445-e289aba72658?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "Jackets",
      },
      {
        id: 25,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "Jackets",
      },
      {
        id: 26,
        name: "Garmin Venu Smartwatch ",
        img: "https://plus.unsplash.com/premium_photo-1670035789445-e289aba72658?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "Jackets",
      },   
      {
        id: 25,
        name: "Designer's coat",
        img: "https://images.unsplash.com/photo-1627637454030-5ddd536e06e5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "Jackets",
      },
      {
        id: 26,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.unsplash.com/photo-1557418669-db3f781a58c0?q=80&w=1297&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "Jackets",
      }, 
      {
        id: 25,
        name: "My Jacket",
        img: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "Jackets",
      },
      {
        id: 26,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "Jackets",
      },    
      {
        id: 25,
        name: "Designer's jacket",
        img: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "Jackets",
      },
      {
        id: 26,
        name: "Garmin Venu Smartwatch ",
        img: "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        cat: "Jackets",
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