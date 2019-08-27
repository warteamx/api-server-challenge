import React, {useState, useEffect} from 'react';

function Cart() {

  const [value,
    setValue] = useState('');
  const [wishlist,
    setWishlist] = useState([
    {
      id: 1,
      name: 'wedding',
      products: []
    }, {
      id: 2,
      name: 'birthday',
      products: []
    }
  ]);

  useEffect(() => postRequest(wishlist), [wishlist]);

   function postRequest(data) {
    // console.log(value) // Before the Post Request return the Positive ID - the item on wishlist has a negative ID
    // Identify the last Persistent Item in wishlist in order to assing the
    // data.map((value) => {
    //   console.log(value)
    // });

// SIMULATE RANDOM RESPONSE TIME FROM SERVER
    function responseTime(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    //UPDATE THE ID OF THE WISHLIST ITEM WITH LATENCY TO SIMULATE A SERVER CALL TO
    setTimeout(() => {
      let newID = data[data.length - 1].id;
      let posID = newID > 1
        ? newID
        : data[data.length - 2].id + 1;
      wishlist[wishlist.length - 1].id = posID;
      console.log(wishlist);
    }, responseTime(5000));  

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let wishlistID = wishlist[wishlist.length - 1].id
    let newID = wishlistID > 0
      ? -1
      : wishlistID - 1;
    let newWish = {
      id: newID,
      name: value,
      products: []
    };
    let newState = wishlist.concat(newWish);
    setWishlist(newState); // temporal state with negative ID
    // wishlist.concat(newWish)
  }

  const handleEdit = (evt) => {
    evt.preventDefault();
    console.log(evt.target.value)
  }

  return (
    <div>
      <h1>
        Cart
      </h1>
      <form >
        <input type="text" value={value} onChange={e => setValue(e.target.value)}></input>
        <button type='submit' onClick={handleSubmit}>Add wish</button>
      </form>



      <h2>
        LISTS UI STATE
      </h2>
      {wishlist.map((value) => <div key={value.id}>
        <form>
          <label htmlFor={value.name}>
            ID: {value.id} --> 
           </label>
          <input  type="text" value={value.name} name={value.name} onChange={evt => setValue(evt.target.value)}/>
          <button onSubmit={handleEdit}>
            <span role="img" aria-label='edit'>
              🖊️
            </span>
          </button>
        </form>
      </div>)}
    </div>
  );
}

export default Cart;
