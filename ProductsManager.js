class ProductsManager {
    static #products = [];
    create(data) {
      const product = {
        id:
          ProductsManager.#products.length === 0
            ? 1
            : ProductsManager.#products[ProductsManager.#products.length - 1].id + 1,
        title: data.title,
        photo: data.photo,
        category: data.category,
        price: data.price,
        stock: 0,
      };
      ProductsManager.#products.push(product);
      console.log("Producto Creado");
    }
    read() {
      return ProductsManager.#products;
    }
  }
  const gestorDeProductos = new ProductsManager();
  
  gestorDeProductos.create({
    title: "Proteina",
    photo: "proteina.jpg",
    category: "Suplementos",
    price: 16.000,
    stock: 10,
  }) // crear un nuevo producto
  gestorDeProductos.create({
    title: "Creatina",
    photo: "creatina.jpg",
    category: "Suplementos",
    price: 12.000,
    stock: 10,
  }) // crear un nuevo producto
  gestorDeProductos.create({
    title: "Glutamina",
    photo: "glutamina.jpg",
    category: "Suplementos",
    price: 10.000,
    stock: 10,
  }) // crear un nuevo producto
  gestorDeProductos.create({
    title: "BCAA",
    photo: "BCAA.jpg",
    category: "Suplementos",
    price: 8.000,
    stock: 10,
  }) // crear un nuevo producto
  gestorDeProductos.create({
    title: "Ganadore de Peso",
    photo: "ganadorDePeso.jpg",
    category: "Suplementos",
    price: 15.000,
    stock: 10,
  }) // crear un nuevo producto
  console.log(gestorDeProductos.read());