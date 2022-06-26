import React from 'react'
import Carrousel from './Carrousel'
import Description from './Description'
import Price from './Price'
import PublishDate from './PublishDate'

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavorite: false
        }
    }

    componentDidMount() {
        const { posting_id } = this.props.post;
        const favorites = localStorage.getItem("postsFavorites") || "";
        const isFavorite = favorites.includes(posting_id);
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
            <li key={index} className={`decoration-plan ${post.publication_plan}`}>
                <div>
                    <Carrousel />
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
                <div>
                    <Description  />
                    <PublishDate
                        publish_date={post.publish_date}
                        posting_id={post.posting_id}
                    />
                </div>
                <p>{post.posting_id}</p>
                <button className={isFavorite ? 'favorite' : ''} onClick={() => this.handleToggleFavorites(post.posting_id)}>Favorites</button>
            </li>
        )
    }
}

export default PostItem;