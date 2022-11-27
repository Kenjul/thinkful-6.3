function getTotalBooksCount(books) {
  let result = 0;
  if (books.length === 0) {
    return result;
  } else {
    return books.length;
  }
}

function getTotalAccountsCount(accounts) {
  let result = 0;
  if (accounts.length === 0) {
    return result;
  } else {
    return accounts.length;
  }
}

function getBooksBorrowedCount(books = []) {
  // do this
  // in books array, there is borrows array nested inside
  // loop through each object in books
  // each object element in books array = bookObj
  // each individual book in the library = bookObj
  // each bookObj has a borrows key === array[]
  let notReturnedArray = books.filter((bookObj) => {
    // destructure bookObj to get access to borrows
    const { borrows } = bookObj;
    // using .some, find out if false is in borrowsObj ONCE, then output true
    // borrows object has a property = returned
    let hasBookBeenBorrowed = borrows.some(
      (borrowsObj) => !borrowsObj.returned
    );
    return hasBookBeenBorrowed;
  });

  // array.length => number
  return notReturnedArray.length;

  // return a number: the # of borrowed books currently being borrowed from the library
}

function getMostCommonGenres(books = []) {
  let result = [];

  let lookUp = {};

  books.forEach((bookObj) => {
    // destructure to get access to genre
    const { genre } = bookObj;
    // hasOwnProperty (only for objects) => boolean
    // it also checks if lookUp has genre property
    if (lookUp.hasOwnProperty(genre)) {
      // add 1 if it exists
      lookUp[genre] += 1;
    } else {
      // otherwise, make it 1 if it doesnt have it
      lookUp[genre] = 1;
    }
  });
  const genresArray = Object.keys(lookUp);

  genresArray.forEach((genre) => {
    let count = lookUp[genre];
    let currentObj = { name: genre, count: count };
    result.push(currentObj);
  });

  // returns an array[]
  // ordered from most COMMON to LEAST = sort
  // 5 objects or less = slice(0,5) or (0,6)?
  // .count is selected because of currentObj being pushed into result
  result.sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1));
  return result.slice(0, 5);
}

function getMostPopularBooks(books = []) {
  let result = [];

  // borrows.length = number of times a book has been borrowed
  books.forEach((bookObj) => {
    // destructure --> borrows, title
    const { borrows, title } = bookObj;
    let currentObj = { name: title, count: borrows.length };

    result.push(currentObj);
  });

  result.sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1));
  return result.slice(0, 5);
}

function getMostPopularAuthors(books = [], authors = []) {
  let currentObj = {};
  let formattedName = undefined;
  let foundAuthor = undefined;
  let result = books.map((bookObj) => {
    const { borrows } = bookObj;
    foundAuthor = authors.find((authorObj) => {
      
      return bookObj.authorId === authorObj.id;
    });
    formattedName = helperJoinFirstAndLastNames(
        foundAuthor.name.first,
        foundAuthor.name.last
      );
    
    currentObj = { name: formattedName, count: borrows.length };
    
    return currentObj;
  });
result.sort((authorA, authorB)=> authorA.count < authorB.count ? 1 : -1);


  return result.slice(0,5);


// let currentObj = {};
//   let result = authors.map((authorObj)=>{
//     const {id} = authorObj;
//     if (id === books.???)
//   })
}

function helperJoinFirstAndLastNames(first, last) {
  return `${first} ${last}`;
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
