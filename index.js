class User {
    constructor(yearOfBirth, age) {
      this.yearOfBirth = yearOfBirth;
      this.age = age;
    }
  
    setAge(age) {
      this.age = age;
    }
  
    setYearOfBirth(yearOfBirth) {
      this.yearOfBirth = yearOfBirth;
    }
  
    getYearOfBirth() {
      return this.yearOfBirth;
    }
  
    getAge() {
      return this.age;
    }
  
    isOlder() {
      const date = new Date();
      const currentYear = date.getFullYear();
      if (currentYear < this.yearOfBirth || this.yearOfBirth < 0) {
        this.setYearOfBirth(
          prompt(
            "El año ingresado es incorrecta por favor ingrese un valor valido"
          )
        );
        return this.isOlder();
      }
      this.setAge(currentYear - this.yearOfBirth);
      if (this.age < 18) {
        alert("Eres menor de edad no puedes ingresar a esta pagina");
        return window.location.assign("https://www.google.com");
      }
    }
  }
  
  const user = new User(parseInt(prompt("Ingrese el año en que nació")));
  user.isOlder();
  