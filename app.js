console.log("Hello World!\n=======================\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n========================\n");

const number = [2, 22, 12, 17, 18, 39, 129];
console.log(number);
function arraySum(array){
    let sum = 0;

    array.forEach(array => {
        sum+=array;
        
    });

    return sum;
}
console.log(arraySum(number));


// Exercise 2 Section
console.log("EXERCISE 2:\n========================\n");

let book = {};

book.name =  "A Song of Ice and Fire",
book.author = "R.R.Martin"
book.pages = 694,
book.chapters = 73,
book.readCount = 1,

console.log(book);

book.info = function (){

return `${this.name} by ${this.author},is ${this.pages} pages and has a ${this.chapters} chapters and has been read ${this.readCount} times.`;
};


console.log(book.info());

book.name =  "The Hobbit",
book.author = "J.R.R Tolkien"
book.pages = 295,
book.chapters = 8,
book.readCount = 3,

console.log(book);

book.info = function (){

return `${this.name} by ${this.author},is ${this.pages} pages and has a ${this.chapters} chapters and has been read ${this.readCount} times.`;
};


console.log(book.info());


// Exercise 3 Section
console.log("EXERCISE 3:\n========================\n");

let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence);
function reverseWords(sentence){
    let words = sentence.split(" ");
    console.log(words);
    let result = [];
    for (let i = 0; i < words.length ; i++ ){
        let letters = words[i].split("");
          console.log(letters);
        letters.reverse();
        let reverseWords = letters.join("");
          console.log(reverseWords)
        result = result.concat(reverseWords);
          console.log(result);
    }

    return result.join(" ");
} 
console.log(reverseWords(sentence));


// Exercise 4 Section
console.log("EXERCISE 4:\n========================\n");

let csvData = "Name,Age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
console.log(csvData);
    let csvDataArr = csvData.split("\n");
    console.log(csvDataArr);
    let headers = csvDataArr[0].split(",");
    console.log(headers);
    let result = [];
       
    for (let i = 1; i < csvDataArr.length; i++ ){
        let obj = {};
        if(csvDataArr[i] == undefined || csvDataArr[i].trim() ==""){   
        }
        let words = csvDataArr[i].split(",");
          console.log(words);
        for(let j = 0; j < words.length ; j++ ){
            obj[headers[j].trim()] = words[j];  
        }
        result.push(obj);
    }
 
    console.log(result);  
    