import React, {Component} from 'react';
import MoviePost from "../../components/MoviePost/MoviePost";
import {MoviePostProps} from "../../types";

interface State {
  posts: MoviePostProps[];
  name: string;
}

class MovieApp extends Component<{}, State> {
  state: State = {
    posts: [],
    name: '',
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<State>, snapshot?: any) {
    localStorage.setItem('posts', JSON.stringify(this.state.posts));
  }

  componentDidMount() {
    const data = localStorage.getItem('posts');
    const posts = data ? JSON.parse(data) : [];

    this.setState(prev => ({
      ...prev,
      posts: posts,
    }));
  }

  addMoviePost = () => {
    console.log(this.state.posts)
    this.setState(prev => ({
      ...prev,

      posts: [...prev.posts, {id: Date.now(), movieName: this.state.name}]
    }))
  }

  changeMovieName = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    this.setState(prev => ({
      ...prev,
      posts: prev.posts.map(post => {
        return post.id === id ? {
          ...post,
          movieName: e.target.value
        } : post;
      })
    }))
  }

  onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState(prev => ({
      ...prev,
      name: value
    }))
  };

  onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.addMoviePost();
  }

  onDelete = (id: number) => {
    this.setState(prev => ({
      ...prev,
      posts: [...prev.posts].filter(post => post.id !== id),
    }));
  }

  render() {
    return (
      <div>
        <form style={{margin: '20px'}} onSubmit={this.onFormSubmit}>
         <input type="text" value={this.state.name} onChange={this.onTextFieldChange}/>
         <button type="submit">Add</button>
        </form>
        {this.state.posts.map(post => (
          <MoviePost key={post.id} movieName={post.movieName} onNameChange={(e) => this.changeMovieName(e, post.id)} onDelete={() => this.onDelete(post.id)}/>
        ))}
      </div>
    );
  }
}

export default MovieApp;