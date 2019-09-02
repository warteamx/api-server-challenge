import React , {useState} from 'react'
import { store } from '../store'
import { postWish, patchWish, getAllWishes, receiveWishes } from '../actions'
import _ from 'lodash'
import { connect } from "react-redux";
// import server from '../api/server';

const mapStateToProps = state => {
    return { wishlist: state.wishlist };
  };

 function Wishlist( {wishlist}  ) {
    const [value, setValue] = useState('');
    const [edit, setEdit] = useState({id:"" , name:""});
    const [id, setId] = useState();

 let normalizedId = () => {
    // let stateLastItem = state.state.wishlist
    // let lastStateId = stateLastItem[stateLastItem.length - 1].id
    console.log(wishlist)
    let lastStateId = wishlist[wishlist.length -1 ].id
    lastStateId > 0 ? setId(lastStateId +1 ) : setId( lastStateId - 1) 
}


let handlesubmit = () => {
    normalizedId()
    dispatchPostWishList()
}

   let dispatchPostWishList = () => {
    let postNewWish = {id: id, name: value}
        store.dispatch(postWish(postNewWish));
    }

    function dispatchPatchWish(e) {
        store.dispatch(patchWish(edit));
    }
   
    // let wishlist = store.getState()
    // const editList = (e) => {
    //     let newValue = { id: -1 , name: e.target.value }
    //     // console.log(newValue)
    //     setValue(newValue) 
    //     // console.log(newValue)
    //     // let array = new Array(state.length);
    //     // setEdit(array);
    //     // console.log(edit)

    //   }


      let WishlistStoreState = JSON.stringify(store.getState())
    //   store.subscribe(() => console.log('Look ma, Redux!!'))

// console.log(state);

    return (
        <div>
            <h1>Solution Cart <span className="incomplete"> (Incomplete) </span> </h1>
            
            <p> Add wislist to Redux Store </p>

            <input type="text" value={value} onChange={e => setValue(e.target.value)}></input>
            <button  onClick={handlesubmit}> Add Wishlist </button>
            <h2>Wishlist Store State</h2>
            <p>{WishlistStoreState}</p>

            <h2> Wishlist </h2>
            {/* {_.values(state).map((data, i)=>{
                 return(
                      <form key={i}> ID: {data.id} --> {data.name}
                      <input type="text" placeholder={data.name} value={edit.name} data-index={data.id} onChange={(e) => editList(e)} />
                      <button data-tech="store" onClick={dispatchPatchWish}> <span role="img" aria-label="edit pen"> 🖊️ </span>  </button>
                      </form>
                      )
           })} */}
        </div>
    )
}

const Solution = connect(mapStateToProps)(Wishlist);

export default Solution;