import Axios from 'axios';
import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        postData: {}
    }

    componentDidUpdate() {
        
        if (this.props.post) {

            // Since we're using classes, we use this hook. This check below prevents the hook constantly firing.
            if (this.state.postData && this.state.postData.id !== this.props.post) {

                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.post)
                    .then(response => {
                        this.setState({postData:response.data})
                    })
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.post)
            .then(response => {
                console.log(response)
                this.setState({postData:{title:'deleted', body:'deleted'}})
            })
    }


    render () {
        let post = <p>Please select a Post!</p>;
        if (this.props.post) {
            post = <p>Loading...</p>
        }
        if (this.props.post && this.state.postData !== {}) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.postData.title}</h1>
                    <p>{this.state.postData.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;