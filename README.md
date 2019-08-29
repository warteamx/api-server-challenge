## Problem

In a naive approach, when a new wishlist is created and sent to a server via a POST request and
the user quickly changes the name of that new list. It might cause another POST request, when it
actually should be a PATCH request in case the first one was successful.

``` javascript

// initial state
const wishlists = [];
// user creates a new cart (POST request)
const wishlists = [{ id: -1, name: '', products: [] }];
// user quickly updates the name (POST request)
// since the first response did not come back and the ID is still negative
const wishlists = [{ id: -1, name: 'wedding', products: [] }];
// after both requests have finished, we might end up with two persons,
// depending on the implementation
const wishlists = [
{ id: 1, name: '', products: [] },
{ id: 2, name: 'wedding', products: [] },
];

```

## Solution 

Inside the src > Components Folder , there are two copmonents. 

1) For State Management we can use Redux



## Dependencies 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Added [Redux Library](https://redux.js.org/)
Added [lodash](https://lodash.com/)


