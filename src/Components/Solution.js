import React , {useState} from 'react'
import { store } from '../store'
import { postWish } from '../actions'


export default function Solution() {

    const [value, setValue] = useState('');

    function dispatchPostWishList(e) {
        store.dispatch(postWish(value));
    }

    // function dispatchPatchWish(e) {
    //     const tech = e.target.dataset.tech;
    //     store.dispatch(patchWish(tech));
    // }

    let state = JSON.stringify(store.getState())

    return (
        <div>
            <h1>Solution Cart </h1>
            <input type="text" value={value} onChange={e => setValue(e.target.value)}></input>
            <button  onClick={dispatchPostWishList}> Post Wishlist </button>
           
            <h2> Store State </h2>
            <p> {state} </p>

            {/* <button data-tech="store" onClick={dispatchPatchWish}> Store </button> */}

        </div>
    )
}