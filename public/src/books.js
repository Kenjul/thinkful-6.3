function findAuthorById(authors, id) {
  // do this
  //return author object
  // .find if matches
  let foundAuthor = authors.find((authorObj) => {
    return authorObj.id === id;
  });
  return foundAuthor;
}

function findBookById(books, id) {
  // do this
  // goal : return book object

  // set variable to return later
  // assign the variable to equate to .find method
  // bookObj = book object in books array

  let foundBook = books.find((bookObj) => {
    // if book object's id === the id parameter from function line 11
    // return true
    return bookObj.id === id;
  });
  // return foundBook (variable) which is book object with the correct id
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  // do this
  //filter makes array
  // filter through for both properties being true/false
  let borrowedBooks = books.filter((bookObj) => {
    // destructure for access to borrows array& it's properties
    const { borrows } = bookObj;

    // const borrows = bookObj.borrows
    // const title = bookObj.title

    // set variable for array
    // .every method to go through each element and check for each element's returned property
    let notReturned = borrows.every((currentBorrowedBook) => {
      // check if it's true or not
      return currentBorrowedBook.returned === true;
    });

    return notReturned;
  });

  let returnedBooks = books.filter((bookObj) => {
    const { borrows } = bookObj;
    // .some method because if one is false then the book isn't returned
    let isReturned = borrows.some((currentReturnedBook) => {
      return currentReturnedBook.returned === false;
    });
    return isReturned;
  });

  // return an array w/ 2 arrays: borrowed and returned books
  // [borrowedBooks, returnedBooks]
  return [returnedBooks, borrowedBooks];
}

function getBorrowersForBook({ borrows }, accounts) {
  // do this
  // loop through accounts array

  let result = borrows.map((borrowObj) => {
    // map returns a new array of the same length
    // destructure borrows for it's id
    const { id, returned } = borrowObj;
    // access account's id w/ book borrow's id ... then match
    const matchedID = accounts.find((accountObj) => id === accountObj.id);
    // find doesn't return as an array, instead it returns the element that matches
    // if it's a match, add to account's info : the returned status
    // return array w/ the account objects
    return { ...matchedID, returned };
  });
  // make sure list is less than 10 or 10
  // return an array of 10 or less account objects => slice 0,10

  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
