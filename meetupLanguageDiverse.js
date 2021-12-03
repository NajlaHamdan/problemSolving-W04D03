const list = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "Ruby",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 43,
    language: "Ruby",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 95,
    language: "JavaScript",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 18,
    language: "JavaScript",
  },
  {
    firstName: "Joao",
    lastName: "D.",
    country: "Portugal",
    continent: "Europe",
    age: 25,
    language: "JavaScript",
  },
];
const fuct = () => {
  const JavaScript = list.filter((item) => item.language == "JavaScript");
  const Ruby = list.filter((item) => item.language == "Ruby");
  const Python = list.filter((item) => item.language == "Python");
  console.log(JavaScript.length);
  console.log(Ruby.length);
  console.log(Python.length);
  if(JavaScript.length > Ruby.length**2 || JavaScript.length >Python.length**2){
    return true;
  }else{
    return false;
  }
};
