let products = [
  {
    id: 1,
    name: "iPhone 16",
    brand: "Apple",
    category: "Mobile",
    price: 79999,
    rating: 4.8,
    stock: 15
  },
  {
    id: 2,
    name: "Galaxy S25",
    brand: "Samsung",
    category: "Mobile",
    price: 74999,
    rating: 4.7,
    stock: 10
  },
  {
    id: 3,
    name: "Boat Rockerz 550",
    brand: "Boat",
    category: "Headphone",
    price: 1999,
    rating: 4.3,
    stock: 120
  },
  {
    id: 4,
    name: "Dell Inspiron 15",
    brand: "Dell",
    category: "Laptop",
    price: 58999,
    rating: 4.5,
    stock: 8
  },
  {
    id: 5,
    name: "HP Victus",
    brand: "HP",
    category: "Laptop",
    price: 67999,
    rating: 4.6,
    stock: 5
  },
  {
    id: 6,
    name: "Noise ColorFit Pro",
    brand: "Noise",
    category: "Smartwatch",
    price: 2999,
    rating: 4.2,
    stock: 60
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "Headphone",
    price: 24999,
    rating: 4.9,
    stock: 12
  },
  {
    id: 8,
    name: "Logitech G102",
    brand: "Logitech",
    category: "Mouse",
    price: 1499,
    rating: 4.4,
    stock: 90
  },
  {
    id: 9,
    name: "Samsung 27-inch Monitor",
    brand: "Samsung",
    category: "Monitor",
    price: 15999,
    rating: 4.5,
    stock: 20
  },
  {
    id: 10,
    name: "Amazon Echo Dot",
    brand: "Amazon",
    category: "Smart Speaker",
    price: 4499,
    rating: 4.6,
    stock: 30
  }
];

const newarr = products.filter((product)=>product.price>5000).sort((a,b)=>a.price-b.price).map((product)=>({name : product.name, price:product.price}));
// const newarr2 = products.map((product)=>({name : product.name, price:product.price}));

console.log(newarr);