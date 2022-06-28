import React from 'react'
import { connect } from 'react-redux'
import { loadPosts } from '../actions'
import PostItem from './PostItem'
import Filters from './Filters'
import { Oval } from  'react-loader-spinner'

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        const { onLoadData } = this.props;
        onLoadData();
    }

    render() {
        const { posts, fetching } = this.props;
        if (fetching) {
            return (
                <div className="posts-page">
                    <Filters />
                    <div className="loading-centered">
                        <Oval color="#1a8f89" height={80} width={80} secondaryColor="#FFFFFF" />
                    </div>
                </div>
            )
        }
        return (
            <div className="posts-page">
                <Filters />
                {posts && 
                    <ul className="post-list-container">
                        {posts.map((post, index) => {
                            return (
                                <PostItem key={index} index={index} post={post}/>
                            )
                        })}
                    </ul>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      value: state.value,
      fetching: state.fetching,
      posts: state.filteredPosts
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onLoadData: () => dispatch(loadPosts()),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);