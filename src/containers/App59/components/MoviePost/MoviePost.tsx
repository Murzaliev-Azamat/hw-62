import React, {Component} from 'react';

interface Props {
  movieName: string;
  onNameChange: React.ChangeEventHandler<HTMLInputElement>;
  onDelete: React.ReactEventHandler<HTMLButtonElement>;
}


class MoviePost extends Component<Props> {
  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): boolean {
    return nextProps.movieName !== this.props.movieName
  }

  render() {
    return (
      <div style={{margin: '5px'}}>
        <input type="text" value={this.props.movieName} onChange={this.props.onNameChange}/>
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

export default MoviePost;