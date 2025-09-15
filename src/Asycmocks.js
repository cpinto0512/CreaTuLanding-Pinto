const productos = [
  {
    id: "101",
    nombre: "Almendras deshidratadas 130g",
    precio: 7,
    img: "../img/101.jpg",
    idCat: "Cat1",
    stock: 50
  },
  {
    id: "102",
    nombre: "Cashews activados 130g",
    precio: 7,
    img: "../img/102.jpg",
    idCat:"Cat1",
    stock: 60
  },
  {
    id: "103",
    nombre: "Castañas activadas 130g",
    precio: 8,
    img: "../img/103.jpg",
    idCat:"Cat2",
    stock: 70
  },
  {
    id: "104",
    nombre: "Pecanas activadas 100g",
    precio: 7,
    img: "../img/104.jpg",
    idCat: "Cat2",
    stock: 50
  },
  {
    id: "105",
    nombre: "Pistachos activados 100g",
    precio: 10,
    img: "../img/105.jpg",
    idCat: "Cat3",
    stock: 60
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProductDetail = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find(item => item.id === id);
      resolve(producto);
    }, 2000);
  });
};

export const getProdByCategory = (idCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const category = productos.filter(item=> item.idCat === idCategory);
      resolve(category);
    }, 100);
  });
};
