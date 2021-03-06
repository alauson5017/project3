import React, { Component } from 'react';
import Favorite from './Favorite.js';


class RestaurantItem extends Component {
    
    render() {         
        
        // This function uses the function passed from RestaurantDetail or RestaurantList
        // and searches on the restaurant ID.
        const searchRestaurantDetails = (e) =>{
            e.preventDefault()
            const restaurantID = this.props.restaurant.id

            // Invoke the restaurant search on the current restaurant
            this.props.handleRestaurantSearch(this.props.restaurant.id);
        }
        return (
            <div>
                <br></br>
                <div class="row flex-container">
                    <div class="card lighten-1 item-card">
                        <div class="card-content black-text center-details">
                            <span class="card-title restaurant-title">{this.props.restaurant.name}</span>
                            <div>{this.props.restaurant.location.city}, {this.props.restaurant.location.zipcode}</div>
                            <br />
                            <div class="card-action" class="cuisines">
                                <div>Cuisines: {this.props.restaurant.cuisines}</div>
                            </div>
                            {(this.props.restaurant.thumb)?<img border="0" src={this.props.restaurant.thumb} alt="name" className='display-thumb'/>:<img border="0" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png' alt="name" className='display-thumb-unavail'/>}
                            <div class="card-action display-links">
                                {(this.props.restaurant.menu_url)?<a class="red-text" id='links' href={this.props.restaurant.menu_url} target="_blank">Restaurant Menu</a>:<h3></h3>}
                                {(this.props.restaurant.photos_url)?<a class="red-text" href={this.props.restaurant.photos_url} target="_blank">Photos</a>:<h3></h3>}
                                {(this.props.restaurant.events_url)?<a class="red-text" href={this.props.restaurant.events_url} target="_blank">Events</a>:<h3></h3>}
                                <a class="waves-effect waves-light btn-large" onClick={searchRestaurantDetails}>Details</a>                                
                                <Favorite onFaveToggle={this.props.onFaveToggle} isFave={this.props.isFave} favoriteRestaurants={this.props.favoriteRestaurants} />
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RestaurantItem; 