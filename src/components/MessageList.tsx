import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
export interface Props{
    fetchPosts:Function,
    posts:any
}
class MessageList extends React.Component<Props> {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList(){
        return this.props.posts.map((post:any)=>{
            return(
                <div className="item" key={post.id}>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state:any) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(MessageList);