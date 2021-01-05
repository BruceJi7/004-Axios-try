import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import post from '../../components/Post/Post';

class Blog extends Component {

    constructor() {
        super()
        this.state = {
            posts : [],
            selectedPost: null, 
        }
    }

    handlePostSelect(id) {

        this.setState({selectedPost:id})
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                let shortenedPosts = response.data.slice(0, 6)
                shortenedPosts = shortenedPosts.map(post => {
                    return {
                        ...post,
                        author:'me'
                    }
                })
                this.setState({posts:shortenedPosts})
                console.log(this.state.posts)
            })

    }
  

    render () {
        
        const posts = this.state.posts.map(post => {
            return <Post 
                        key={post.id} 
                        title={post.title} 
                        author={post.author}
                        handler={() => this.handlePostSelect(post.id)} 
                    />
        })

        
        return (
            <div>
                <section className="Posts">
                    {posts}
           
                </section>
                <section>
                    <FullPost post={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;