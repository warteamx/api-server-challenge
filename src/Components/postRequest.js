export default function postRequest(data) {
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
      }