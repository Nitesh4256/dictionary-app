let wordInput = document.getElementById("wordInput");
let search = document.getElementById("search");
;
let authorid = document.getElementById("authorid")






const dictionary =  (word)=>{
const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' +word;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c1267d6f96msh8c32504fa04e816p135a02jsn9eaf323b1584',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch(url ,options)
    .then(response =>response.json())
    .then((response)=>{
      
      console.log(response)
      searchword.innerHTML = response.word;
meaning.innerHTML = response.definition;
        
    }).catch(err =>console.log(err))
}

search.addEventListener("click",(e)=>{
e.preventDefault();
dictionary(wordInput.value)
})

// quote section
const  quotes = (count=0)=> {


fetch("https://type.fit/api/quotes")
.then(function(response) {
  return response.json();
})
.then(function(data) {
  


   quote.innerHTML = data[count].text;
authorid.innerHTML = data[count].author;
  });
  }
  quotes()
let count = 0;
   next.addEventListener("click",()=>{
 count++;
 quotes(count)
   })
   pervious.addEventListener("click",()=>{
 count--;
 if(count < 0) {
  count = 0;
 }
 quotes(count)
   })

  const url = 'https://word-of-the-day2.p.rapidapi.com/word/dc/recent';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c1267d6f96msh8c32504fa04e816p135a02jsn9eaf323b1584',
		'X-RapidAPI-Host': 'word-of-the-day2.p.rapidapi.com'
	}
};
fetch(url,options)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
  
console.log(data[0].date)
WOTD.innerHTML = data[0].word;
todaywordmeaning.innerHTML = data[0].mean;
dates.innerHTML = data[0].date;
  });

