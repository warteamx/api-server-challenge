import React from 'react'
import {store} from '../store'
import {setTechnology} from '../actions'


export default function Solution() {

    function dispatchBtnAction(e) {
        const tech = e.target.dataset.tech;
        store.dispatch(setTechnology(tech));
      }

      let state = JSON.stringify(store.getState())

    return(
        <div>
            <h1>Solution Cart </h1>
            <button data-tech="wishlist" onClick={dispatchBtnAction}> wishlist </button>
            <button data-tech="store" onClick={dispatchBtnAction}> Store </button>
            <h2> Store State </h2>
            <p> {state} </p>

        </div>
    )
}