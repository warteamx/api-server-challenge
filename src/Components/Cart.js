import React, {useState, useEffect} from 'react';

function Cart() {

  const [value, setValue] = useState('');
  const [wishlist, setWishlist] = useState([
      { id: 1, name: 'wedding', products: [] },
      { id: 2, name: 'birthday', products: [] },
      ]);

      useEffect(() => postRequest(wishlist) , [wishlist]);

      function postRequest(data) {
        console.log(data);
        data.map( (value )=> console.log(value) );

      }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let wishlistID = wishlist[wishlist.length - 1].id
    let newID = wishlistID > 0 ? -1 : wishlistID -1;
    let newWish = { id: newID, name: value, products:[]};
    let newState =  wishlist.concat(newWish); 
    setWishlist(newState);   // temporal state with negative ID
    // wishlist.concat(newWish)

}

// const wishlistUI = wishlist.map( (value) => 
// <div key = {value.id}> 
// <form> 
//   {value.id}
// <input type="text" value= {value.name} onChange={e => setValue(e.target.value)}/>
// <button> <span role="img" aria-label='edi'> 🖊️ </span></button>
// </form>
// </div>
// );

  return (
<div>
   <h1> Cart </h1>
   <form >
   <input type="text" value={value} onChange={ e => setValue(e.target.value)} ></input>
   <button type='submit' onClick={handleSubmit} >Add wish</button>
   </form>

   <h2> LISTS UI STATE</h2>
   { wishlist.map( (value) => 
<div key = {value.id}> 
<form> 
  {value.id}
<input type="text" value= {value.name} onChange={e => setValue(e.target.value)}/>
<button> <span role="img" aria-label='edi'> 🖊️ </span></button>
</form>
</div>
)}

   <h2> </h2>
</div>
  );
}

export default Cart;
