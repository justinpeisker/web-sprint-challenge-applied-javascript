import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardDiv = document.createElement('div'); 
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const container = document.createElement('div');
  const imgSrc = document.createElement('img');
  const authorSpan = document.createElement('span');

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(container);
  container.appendChild(imgSrc);
  authorDiv.appendChild(authorSpan);

  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  container.classList.add('img-container');

  headlineDiv.textContent = article.headline;
  authorSpan.textContent = article.authorName;
  imgSrc.src = article.authorPhoto;

 cardDiv.addEventListener('click', () => {
   console.log(article.headline);
 })

  return cardDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`http://localhost:5000/api/articles`)
  .then(resp =>{
    console.log(resp);
   
    const card1 = [resp.data.articles.javascript[0]];
    const card2 = [resp.data.articles.javascript[1]];
    const card3 = [resp.data.articles.javascript[2]];
    const card4 = [resp.data.articles.javascript[3]];
    const card5 = [resp.data.articles.bootstrap[0]];
    const card6 = [resp.data.articles.bootstrap[1]];
    const card7 = [resp.data.articles.bootstrap[2]];
    const card8 = [resp.data.articles.technology[0]];
    const card9 = [resp.data.articles.technology[1]];
    const card10 = [resp.data.articles.technology[2]];
    const card11 = [resp.data.articles.jquery[0]];
    const card12 = [resp.data.articles.jquery[1]];
    const card13 = [resp.data.articles.jquery[2]];
    const card14 = [resp.data.articles.node[0]];
    const card15 = [resp.data.articles.node[1]];


    const newCard1 = Card(card1);
    const newCard2 = Card(card2);
    const newCard3 = Card(card3);
    const newCard4 = Card(card4);
    const newCard5 = Card(card5);
    const newCard6 = Card(card6);
    const newCard7 = Card(card7);
    const newCard8 = Card(card8);
    const newCard9 = Card(card9);
    const newCard10 = Card(card10);
    const newCard11 = Card(card11);
    const newCard12 = Card(card12);
    const newCard13 = Card(card13);
    const newCard14 = Card(card14);
    const newCard15 = Card(card15);
   

    document.querySelector(selector).appendChild(newCard1);
    document.querySelector(selector).appendChild(newCard2);
    document.querySelector(selector).appendChild(newCard3);
    document.querySelector(selector).appendChild(newCard4);
    document.querySelector(selector).appendChild(newCard5);
    document.querySelector(selector).appendChild(newCard6);
    document.querySelector(selector).appendChild(newCard7);
    document.querySelector(selector).appendChild(newCard8);
    document.querySelector(selector).appendChild(newCard9);
    document.querySelector(selector).appendChild(newCard10);
    document.querySelector(selector).appendChild(newCard11);
    document.querySelector(selector).appendChild(newCard12);
    document.querySelector(selector).appendChild(newCard13);
    document.querySelector(selector).appendChild(newCard14);
    document.querySelector(selector).appendChild(newCard15);
  })
}

export { Card, cardAppender }
