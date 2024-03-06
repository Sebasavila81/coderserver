class UserManager {
    static #users = [];
    create(data) {
      const user = {
        id:
          UserManager.#users.length === 0
            ? 1
            : UserManager.#users[UserManager.#users.length - 1].id + 1,
        photo: data.photo,
        email: data.email,
        password: data.password,
        role: 0,
      };
      UserManager.#users.push(user);
      console.log("usuariocreado");
    }
    read() {
      return UserManager.#users;
    }
  }
  const gestorDeUsuarios = new UserManager();
  
  gestorDeUsuarios.create({
      photo: "photojorge.jpg",
      email: "jorge18@gmail.com",
      password: "PruebaPass",
  }) // crear un nuevo usuario
  gestorDeUsuarios.create({
      photo: "photocarlos.jpg",
      email: "carlos17@gmail.com",
      password: "PruebaPassCarlos",
  }) // crear un nuevo usuario
  
  console.log(gestorDeUsuarios.read());
  