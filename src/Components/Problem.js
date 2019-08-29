import React, { useState, useEffect } from 'react';

function Problem() {

  const [value, setValue] = useState('');
  const [wishlist, setWishlist] = useState([
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
  // const [edit, setEdit] = useState([{index:0, editName:""}]);
  const [edit, setEdit] = useState([]);
  const [patchName, setPatchName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await function postRequest(data) {
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
        return wishlist
      };
      setWishlist(result);
    }
    fetchData();
    let array = new Array(wishlist.length);
    setEdit(array);

  }, [wishlist]);


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


  const handleEdit = (e) => {
    e.preventDefault();
    function patchrequest() {
      let index = e.target.id - 1;   // Index of wishlist to  patchRequest
      let errorOfSeverAPIChanllenge = index < 0 ? "error id negative" : "Patch Request Successfull";
      console.log(errorOfSeverAPIChanllenge);
      console.log(patchName);
      setValue(wishlist[index].name = patchName);
    }

    try {
      patchrequest();
    }
    catch (err) {
      console.log(err)
    }

  }


  const editList = (e) => {
    let index = e.target.dataset.index
    let newValue = { index: index, name: e.target.value }
    console.log(newValue);
    // let array = new Array(wishlist.length);
    // setEdit(array);
    setPatchName(newValue.name);
    // console.log(e.target.dataset.index)
  }

  return (
    <div>
      <h1>
        Problem Cart
      </h1>
      <p> This cart uses an asycronous postRequest with random Time response.
        That makes that consecutive and quick postRequest will gave us nonconsecutive index  </p>

      <form >
        <input type="text" value={value} onChange={e => setValue(e.target.value)}></input>
        <button type='submit' onClick={handleSubmit}>Add wish</button>
      </form>
      <h2>Wishlist object State</h2>
      {JSON.stringify(wishlist)}
      <h2>
        LISTS UI STATE
      </h2>
      {wishlist.map((value, i) => <div key={value.id}>
        <form>
          <label htmlFor={value.name}>
            ID: {value.id} -->
           </label>
          <label> {value.name} --> </label>
          {/* <input  type="text" value={value.name} name={value.name} data-name={edit} onChange={e => setEdit(e.target.value)}/> */}
          <input type="text" data-index={i} value={edit.index} onChange={(e) => editList(e)} />
          <button type="submit" id={value.id} data-name={edit.name} onClick={e => handleEdit(e)} >  <span role="img" aria-label="edit pen"> 🖊️ </span> </button>
        </form>
      </div>
      )}
    </div>
  );
}

export default Problem;
