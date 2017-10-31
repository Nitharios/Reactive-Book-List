import React, { Component } from 'react';

class NewBookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title : '',
      author : ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addBook({
      title : this.state.title,
      author : this.state.author 
    })
  }

  handleChangeTitle(e) {
    this.setState({
      title : e.target.value,
    })
  }

  handleChangeAuthor(e) {
    this.setState({
      author : e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input type="text" placeholder="title" onChange={this.handleChangeTitle.bind(this)} />
          <input type="text" placeholder="author" onChange={this.handleChangeAuthor.bind(this)} />
          <input type="submit" value="Submit Book" />
        </form>
      </div>
    )
  }
}

export default NewBookForm;