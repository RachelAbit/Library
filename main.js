class Library {
  constructor(author_name, bookTitle, bookPages){
    this.author_name = author_name;
    this.bookTitle = bookTitle;
    this.bookPages = bookPages;
  }

  displayCard(){
   const main = document.querySelector('.contents');
   const card = document.createElement('div');
   const btn_div = document.createElement('div');
   card.setAttribute('class', 'cards');
   card.innerHTML = `
    <h1>Book Title: <span>${this.bookTitle}</span></h1>
    <h2>Author: <span>${this.author_name}</span></h2>
    <h3>Pages: <span>${this.bookPages}</span></h3>
   `;
   btn_div.innerHTML = `
    <input type="checkbox"> &nbsp;Read
    <button id="delete"> Delete </button>
   `
   
   const button_del = btn_div.querySelector('#delete');
   button_del.addEventListener('click', () => {
      let remove_cards = document.querySelector('.cards');
      if(remove_cards){
        remove_cards.remove();
        library.pop();
      }
      console.log(library)
   })

   card.appendChild(btn_div);
   main.appendChild(card);
    
  }
}

const library = []; //to store the cards

const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    
     let getAuthr = document.getElementById('author_name').value;
     let getBookT = document.getElementById('book_title').value;
     let getBookP = document.getElementById('book_pages').value;

     const newLibrary = new Library(getAuthr, getBookT, getBookP);

     library.push(newLibrary);
     newLibrary.displayCard();
     
     console.log(newLibrary);

});