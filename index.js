const tutorials = [
  'What does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'Implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'What is the difference between == and ===?',
  'What is the difference between event capturing and bubbling?',
  'What is JSONP?'
];
let tutorialsCapitalized =[];

const titleCased = () => {
  tutorials.map(function titleCased(stringVariable){

    let newArr = [];

    function stringToArray(string){
      newArr = string.split(" ");
    };
    stringToArray(stringVariable);

    const capitalized = newArr.map(function(string){
      return string.charAt(0).toUpperCase()+string.slice(1);
    })

    const modfiedString = capitalized.join(" ");
    tutorialsCapitalized.push(modfiedString);
    console.log(modfiedString);
  })

  return tutorialsCapitalized;
}
