import './styles.css';
import { Component } from 'react';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';

export class Home extends Component {

  state = {
    posts: [],
    allPosts: [],
    start: 0
  };

  async componentDidMount() {
    this.loadData();
  }

  async componentDidUpdate() {
    this.loadData();
  }

  loadData = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(this.state.start, this.state.start + 9),
      allPosts: postsAndPhotos
    });
  }

  nextPage = () => {
    this.setState({
      start: this.state.start + 9
    });
    console.log(this.state.start);
  }

  previousPage = () => {
    this.setState({
      start: this.state.start - 9
    })
    console.log(this.state.start);
  } 
  
  render() {
    const { posts } = this.state;
    
    return (
      <section className="container">
        <Posts posts={ posts }/>
        <Button text={ "Anterior" } method={ this.previousPage }/>
        <Button text={ "Proxima" } method={ this.nextPage }/>
      </section>
    );
  }

}
