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
    const cardObj1 = {
      article: resp.data.articles.javascript
    }
    const cardObj2 = {
      article: resp.data.articles.bootstrap
    }
    const cardObj3 = {
      article: resp.data.articles.technology
    }
    const card1 = Card(cardObj1);
    const card2 = Card(cardObj2);
    const card3 = Card(cardObj3);

    document.querySelector(selector).appendChild(card1);
    document.querySelector(selector).appendChild(card2);
    document.querySelector(selector).appendChild(card3);

  })
}

export { Card, cardAppender }
