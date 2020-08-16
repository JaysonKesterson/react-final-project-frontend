import React from 'react'
import { connect } from 'react-redux';


const AppContainer = ({stores, items}) => {
    return (
        <div className="AppContainer">
            <h1>Welcome to Bargain Hunter!</h1>
            <br></br>
            <img className="shake" src="https://media0.giphy.com/media/12kx9sn6ZWKQHS/giphy.gif" width="150px" height="100px"></img>
            <img className="image2" src="https://cdn.dribbble.com/users/7793/screenshots/832007/build-it-big.gif" width="150px" height="100px"></img>
            <img className="image3" src="https://steamuserimages-a.akamaihd.net/ugc/451859178969623731/99E7CB7F67467CF4F96FA72A0CA79B8ABE5924BB/" width="150px" height="100px"></img>
            <br></br>
            <h2>Create a Store and Add Items to it for Sale:</h2>
            <h3>Bargain Hunters are entrepreneurs, scowering the site for the best deals. Users from far 
                and wide can post their many items to be sold here. When a User purchases an item you are selling, 
                your Balance updates automatically! If you have the funds to afford an item, clicking the purchase button 
                in the item's detailed view page will automatically take the items from your funds and purchase the item, be 
                the first one to find the deals!
                </h3> 
                <h1>Stats to know about Bargain Hunter</h1>
                <h2>There are currently <b>{`${stores.length}`}</b> stores on Bargain Hunter to search through!</h2> 
                <h2>There are currently <b>{`${items.length}`}</b> items on Bargain Hunter available for purchase!</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        stores: state.stores,
        items: state.items
    }
}
export default connect(mapStateToProps)(AppContainer)