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

class News {
  constructor(title, subtitle, resume) {
    this.title = title;
    this.subtitle = subtitle;
    this.resume = resume;
  }

  setSubtitle(age) {
    this.subtitle = subtitle;
  }

  getSubtitle() {
    return this.subtitle;
  }

  setResume(age) {
    this.resume = resume;
  }

  getResume() {
    return this.resume;
  }
}

const setHTMLHome = (user, news) => {
  document.getElementById(
    "news-title"
  ).innerHTML = `Ultimas noticias para personas de ${user.getAge()} años`;
  document.getElementById("news-h3").innerHTML = `${news.subtitle}`;
};

const localUser = JSON.parse(localStorage.getItem("user"));
let year;
if (!localUser) {
  year = parseInt(prompt("Ingrese el año en que nació"));
}

if (!year && !localUser) {
  window.location.assign("https://www.google.com");
}

const user = new User(localUser?.yearOfBirth || year);
user.isOlder();

const news = new News(
  "Cómo Roblox, la plataforma de videojuegos, ha creado su propia escena musical",
  "Odin, un músico de 15 años conocido como lungskull, en su casa de París."
);

setHTMLHome(user, news);

localStorage.setItem("user", JSON.stringify(user));
