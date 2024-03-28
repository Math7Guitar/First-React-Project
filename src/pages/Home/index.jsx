import './styles.css';
import { Component } from 'react';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { SearchBar } from '../../components/SearchBar';

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
        posts: postsAndPhotos.slice((prevState) => { return { start: prevState.start } }, (prevState) => { return { start: prevState.start + 9 } }),
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
      start: (pS) => { return { start: pS.start + 9 } },
      search: ""
    });
    console.log((pS) => { return { start: pS.start } });
  }

  previousPage = () => {
    this.setState({
      start: (pS) => { return { start: pS.start - 9 } },
      search: ""
    })
    console.log((pS) => { return { start: pS.start } });
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
        <SearchBar method={ this.handleChange }/>
        <Posts posts={ posts }/>
        <Button text={ "Anterior" } method={ this.previousPage }/>
        <Button text={ "Proxima" } method={ this.nextPage }/>
      </section>
    );
  }

}
