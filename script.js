// no API key required for this API
// declare variables and select elements
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'
var btn = document.querySelector('.btn');
var qA = document.querySelector('.quote-author');
var qT = document.querySelector('.quote-text');

    






// define functions


function getQuote() {
    $.ajax({
        Type:`GET`,
        url: API_URL,
        dataType: 'json',
        success: function (data) {
            console.log(data)
            qA.textContent = data.quoteAuthor
            qT.textContent = data.quoteText


        },
        error: function (error) {
            console.log("There was an error")
        }
    })
}

getQuote()


// call functions and/or add Event Listeners
btn.addEventListener("click", function(e){
    if(btn.textContent ==  getQuote()){
        
        
        }
})