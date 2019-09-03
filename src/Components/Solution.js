import React , {useState, useEffect} from 'react'
import { store } from '../store'
import { postWish, patchWish, getAllWishes, receiveWishes } from '../actions'
import _ from 'lodash'
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { wishlist: state.wishlist };
  };

 function Wishlist( {wishlist}  ) {
    const [value, setValue] = useState('');

  let handlesubmit = () => {
  store.dispatch(postWish(value));

  }

  fetch('/src/api/wishlist.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });

      let WishlistStoreState = JSON.stringify(store.getState())
    return (
        <div>
            <h1>Solution Cart <span className="incomplete"> (Incomplete) </span> </h1>
            
            <p> Add wislist to Redux Store </p>

            <input type="text" value={value} onChange={e => setValue(e.target.value)}></input>
            <button  onClick={handlesubmit}> Add Wishlist </button>
            <h2>Wishlist Store State</h2>
            <p>{WishlistStoreState}</p>
        </div>

    )
}

const Solution = connect(mapStateToProps)(Wishlist);

export default Solution;