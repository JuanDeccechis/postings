import React from 'react'
import { connect } from 'react-redux'
import { loadPosts } from '../actions'
import PostItem from './PostItem'
import Filters from './Filters'

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
        const { posts } = this.props;
        return (
            <div>
                <Filters />
                {posts && 
                    <ul>
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