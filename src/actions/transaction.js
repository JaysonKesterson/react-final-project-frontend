import { destroyItem } from './editItemForm.js'
import { updateUserFunds } from './currentUser.js'

export const completeTransaction = (sellerId, price, itemId, history) => {
    return dispatch => {
        const dataToSend = {
            user: {
            seller_id: sellerId,
            price: price
            }
        }
        return fetch("http://localhost:3000/api/v1/transaction", {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => response.json())
        .then( users => {
         if (users.error) {
             (alert(users.error))
         } else {
             dispatch(updateUserFunds(users.buyer.data))
             dispatch(destroyItem(itemId, history))
             alert("Purchase Successful")
         }
     
        })
        .catch(console.log)
    } 
 }