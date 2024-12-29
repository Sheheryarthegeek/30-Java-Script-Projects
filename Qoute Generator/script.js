const category = "inspirational";
const apiurl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
const apiKey = "1+CXVtAvoy9z0STiXeNjOQ==Xzn1P9lJOBIOwTxT";

// Fetch a quote from the API
let getQuote = async (url) => {
  let response = await fetch(url, {
    headers: {
      "X-Api-Key": apiKey,
    },
  });
  let data = await response.json();

  //   Let's select the elements where we want to show the Quotes and the author of the Quotes

  let quoteElement = document.querySelector(".quote blockquote");
  let authorElement = document.querySelector(".quote span");

  //   Now we need to replace the elements content with the fetch data
  quoteElement.innerHTML = data[0].quote;
  authorElement.innerHTML = data[0].author;

  console.log(data);
};

getQuote(apiurl);

// let's write the function for the tweet button

let tweetButton = document.querySelector(".tweet-btn");
let tweetBtnA = document.querySelector(".tweet-btn a");

let tweetQuote = async () => {
  let quoteElement = document.querySelector(".quote blockquote");
  let authorElement = document.querySelector(".quote span");

  let tweetText = encodeURIComponent(
    `Check out this inspiring quote by ${authorElement.innerHTML}: "${quoteElement.innerHTML}"`
  );

  window.open(
    `https://twitter.com/intent/tweet?text=${tweetText}`,
    "height= 400",
    "width= 600"
  );
};
