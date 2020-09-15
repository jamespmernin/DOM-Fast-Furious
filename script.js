let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload = function (event) {

  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]
      }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  let shortTitle = document.querySelector('#main-title');
  shortTitle.textContent = "It's DOM";

  // Part 2
  let body = document.querySelector('body');
  body.style.backgroundColor = '#2C75FF';

  // Part 3
  let list = document.querySelector('#favorite-things');
  list.removeChild(list.lastElementChild);

  // Part 4
  let specialTitles = document.querySelectorAll('.special-title');
  for (let i = 0; i < specialTitles.length; i++) {
    specialTitles[i].style.fontSize = '2rem';
  }

  // Part 5
  pastRaces = document.querySelector('#past-races');
  pastRaces.removeChild(pastRaces.children[3]);

  // Part 6
  // Source: https://stackoverflow.com/questions/20673959/how-to-add-new-li-to-ul-onclick-with-javascript
  let li = document.createElement("li");
  li.appendChild(document.createTextNode("Paris"));
  pastRaces.appendChild(li);

  // Part 7
  // Create the div that will be added
  let blog = document.createElement("div");

  // Create the extra elements to be added to the blog post
  let h1 = document.createElement("h1");
  let para = document.createElement("p");

  // Assign the classes required for the blog post
  blog.className = "blog-post purple";

  // Add the content to the header and paragraph
  h1.textContent = "Paris";
  para.textContent = "I jumped my car over the Eiffel Tower!".toUpperCase();

  // Append the header and paragraph to the blog-post div
  blog.appendChild(h1);
  blog.appendChild(para);

  // Grab the parent div by its class
  let main = document.querySelector(".main");

  // Add the blog post to the parent div
  main.appendChild(blog);
}