import React, { Component } from 'react';
import BlogItem from './blogsItem';
import axios from 'axios';

export default class Blogs extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          blogs: []
        };
      }

    // componentDidMount(){
    //     this.getProjects();
    // }

    componentWillMount(){
        this.getBlogs();
    }

    getBlogs(){
        axios.get(`http://localhost:3000/api/v1.0/blogs`)
        .then(res => {
          this.setState({blogs: res.data.body});
        })
      }

    render() {
        let blogItems;
        if(this.state.blogs){
            blogItems = this.state.blogs.map(blog => {
                return (
                    <div className="col-lg-6" key={blog._id}><BlogItem blog={blog}/><br/></div>
                );
            });
        }
        return (
            <div className="Blogs ml-5 mr-5">
                <div className="jumbotron jumbotron-fluid rounded">
                  <div className="container">
                      <h1 className="display-4 font-italic" style={{color: `hsl(350,100%,62%)`, 'fontSize': `80px`}}>Blogs</h1>
                    <p className="lead"><i> I typically write blogs on technology, learning, and trending topics.
                        If you would like to discuss or comment on any kindly leave a comment using contact me form. </i></p>
                  </div>
                </div>

                    <div className="row">
                        {blogItems}
                    </div>

            </div>
        );
      }

}