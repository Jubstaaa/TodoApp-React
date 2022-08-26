const user = {
  name: "ilker",
  email: "ilkerbalcilartr@gmail.com",
  city: "istanbul",
  roles: ["admin", "customer"],
  getRoles: function () {
    this.roles.forEach((role) => {
      console.log(role);
      console.log(this.name);
    });
  },
};

user.getRoles();

const addES5 = function () {
  let toplam = 0;
  for (let i of arguments) {
    toplam += i;
  }
  console.log(toplam);
};

const addES6 = () => {
  console.log(arguments);
};

addES5(10, 20, 30);
addES5(10, 20, 30, 40);
addES6();
