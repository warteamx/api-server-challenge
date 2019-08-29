import React , {useState} from 'react'
import { store } from '../store'
import { postWish, patchWish } from '../actions'
import _ from 'lodash'


export default function Solution() {

    const [value, setValue] = useState('');
    const [edit, setEdit] = useState({index: "", name:""});

    function dispatchPostWishList(e) {
        store.dispatch(postWish(value));
    }

    function dispatchPatchWish(e) {
        store.dispatch(patchWish(value));
    }

    let wishlist = store.getState()



    const editList = (e) => {
        let index = e.target.dataset.index
        let newValue = { index: index, name: e.target.value }
        console.log(newValue);

        let array = new Array(wishlist.length);
        setEdit(array);
        console.log(edit)
      }

    return (
        <div>
            <h1>Solution Cart </h1>
            <p>(Incomplete) </p>
            <p> Add a Redux Library to manage the state of the store. </p>
                 <ul>
                     <li>Add Server Simulation</li>
                     <li> Redux Thunk for conditional Dispatch actions 
                         (Eg. If the Id of the wishlist is positive => Dispatch PatchRequest )</li>
                 </ul>
            <input type="text" value={value} onChange={e => setValue(e.target.value)}></input>
            <button  onClick={dispatchPostWishList}> Add Wishlist </button>
            <h2> Store State </h2>
            {_.values(wishlist).map((data, i)=>{
                 return(
                      <form key={i}> ID: {data.id} --> {data.name}
                      <input type="text" placeholder={data.name} value={edit.name} data-index={data.id} onChange={(e) => editList(e)} />
                      <button data-tech="store" onClick={dispatchPatchWish}> <span role="img" aria-label="edit pen"> 🖊️ </span>  </button>
                      </form>
                      )
           })}
            

        </div>
    )
}