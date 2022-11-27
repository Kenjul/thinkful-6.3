function findAccountById(accounts, id) {
  // do this
  // .find
  // set variable
  // accounts = [], which has elements inside that are objects, hence accountObj
  let foundAccount = accounts.find((accountObj) => {
    // return to get true
    // set the condition statement with id as the property
    return accountObj.id === id;
  });
  // return foundAccount to complete function
  return foundAccount;
}

function sortAccountsByLastName(accounts) {
  // do this
  // .sort
  // given an array accounts with objects for each element
  // sort through the array: accountA vs accountB
  // return existing array: accounts w/ sort method finished
  return accounts.sort(
    (accountA, accountB) =>
      // sort by last name
      // 1 = flip , -1 = no need to flip , also if 0 then don't do anything else as well
      accountA.name.last > accountB.name.last ? 1 : -1
    // parks.sort((parkA, parkB) => (parkA.rating > parkB.rating ? 1 : -1)); (SETUP)
  );
}

function getTotalNumberOfBorrows(account={}, books=[]) {
  // do this
  // loop through books
  // destructure for borrows
  let matchingId = books.map(({ borrows }) => {
    let borrowsMatchId = borrows.filter(({ id }) => {
      // returns an array
      return id === account.id;
    });
    // this is allowing .map to transform the output array with each element as the number of matches
    return borrowsMatchId.length;
  });
  // setting result variable to return later
  // reducing the array w/ the number of Id's matched in each element
  let result = matchingId.reduce(
    (total, matchingIdElement) => total + matchingIdElement
  );
  // reducing => sum of the numbers in each element of the matchingId array
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  // do this                          {}      books[{}]    [{}]
  // go through each book object
  let matchedBook = books.filter((book) => {
    // .find returns an array of matched objects
    const { borrows } = book;
    let authorObjNest = authors.find((author) => book.authorId === author.id);
    book.author = authorObjNest;

    return borrows.some((borrowObj) => {
      // match both ID's and make sure returned property is false
      // .some outputs a boolean for .find
      return borrowObj.id === account.id && borrowObj.returned === false;
    });

    
  });
    // console.log('********************************************************')
    // console.log(matchedBook)
    // console.log('********************************************************')
  return matchedBook;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
