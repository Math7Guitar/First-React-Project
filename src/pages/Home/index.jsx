import './styles.css';
import { Component } from 'react';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';

export class Home extends Component {

  state = {
    posts: [],
    allPosts: [],
    start: 0,
    search: ""
  };

  async componentDidMount() {
    this.loadData();
  }

  async componentDidUpdate() {
    this.loadData();
  }

  loadData = async () => {
    const postsAndPhotos = await loadPosts();

    if(this.state.search === "") {
      this.setState({
        posts: postsAndPhotos.slice(this.state.start, this.state.start + 9),
        allPosts: postsAndPhotos
      });
    } else {
      this.setState({
        posts: this.state.posts.filter(post => { return post.title.toLowerCase().includes(this.state.search.toLowerCase()) || post.body.toLowerCase().includes(this.state.search.toLowerCase()) }),
        allPosts: postsAndPhotos
      })
    }
  }

  nextPage = () => {
    this.setState({
      start: this.state.start + 9,
      search: ""
    });
    console.log(this.state.start);
  }

  previousPage = () => {
    this.setState({
      start: this.state.start - 9,
      search: ""
    })
    console.log(this.state.start);
  } 

  handleChange = (search) => {
    this.setState({
      search: search 
    })
  }
  
  render() {
    const { posts } = this.state;
    
    return (
      <section className="container">
        <input type="search" className="search" onChange={ (e) => this.handleChange(e.target.value) } value={ this.state.search } placeholder='Search' />
        <Posts posts={ posts }/>
        <Button text={ "Anterior" } method={ this.previousPage }/>
        <Button text={ "Proxima" } method={ this.nextPage }/>
      </section>
    );
  }

}
