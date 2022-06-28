import React from 'react'
import Description from './Description'
import Price from './Price'
import PublishDate from './PublishDate'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavorite: false
        }
    }

    componentDidMount() {
        const { index } = this.props;
        const { posting_id, posting_picture } = this.props.post;
        const favorites = localStorage.getItem("postsFavorites") || "";
        const isFavorite = favorites.includes(posting_id);
        let item = document.getElementById(`${index}`);
        let slider = item.querySelector('.slider');
        slider.style = `background-image: url(${posting_picture})`;
        this.setState({ isFavorite: isFavorite })
    }

    handleToggleFavorites = (id) => {
        const { isFavorite } = this.state;
        let favorites = localStorage.getItem("postsFavorites") || "";
        if(favorites.includes(id)){
            const index = favorites.indexOf(id);
            favorites = favorites.replace(`${id}-`, '');
        }
        else{
            favorites = favorites.concat(id,'-');
        }
        
        localStorage.setItem( 'postsFavorites', favorites );
        this.setState({ isFavorite: !isFavorite });
    }

    render() {
        const { index, post } = this.props;
        const { isFavorite } = this.state;
        return(
            <li key={index} id={index} className={`container post-item-container decoration-plan ${post.publication_plan}`}>
                <div className="inline inline-with-image">
                    <div className="post-image-container">
                        <div className="favorite-container" onClick={() => this.handleToggleFavorites(post.posting_id)}>
                        {isFavorite ? 
                            <FavoriteIcon className={`icon right short-icon favorite`} />
                        :
                            <FavoriteBorderIcon className={`icon right short-icon`} />
                        }
                        </div>
                        <div className="slider"></div>

                        {post.posting_prices[0].expenses ?
                            <Price 
                                priceCurrency={post.posting_prices[0].price.currency} 
                                priceAmount={post.posting_prices[0].price.amount} 
                                expensesCurrency={post.posting_prices[0].expenses.currency} 
                                expensesAmount={post.posting_prices[0].expenses.amount}
                            />
                        :
                            <Price 
                                priceCurrency={post.posting_prices[0].price.currency} 
                                priceAmount={post.posting_prices[0].price.amount} 
                            />
                    }
                    </div>
                
                    <div className="post-description-container">
                        <div>
                            <Description 
                                title={post.title} 
                                location_address={post.posting_location.address}
                                location_zone={post.posting_location.zone}
                                location_city={post.posting_location.city}
                                description={post.posting_description}
                                />
                        </div>
                        <div className="post-options">

                            <PublishDate
                                publish_date={post.publish_date}
                                posting_id={post.posting_id}
                                />
                            <a href="https://google.com" className="without-link-styles btn btn-primary">Contactar</a>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default PostItem;