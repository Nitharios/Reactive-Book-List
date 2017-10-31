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

    this.setState({
      title : '',
      author : ''
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
      <div className="newBookForm">
        <div>{ this.props.message }</div>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input type="text" name="title" placeholder="title" value={ this.state.title } onChange={this.handleChangeTitle.bind(this)} />
          <input type="text" name="author" placeholder="author" value={ this.state.author } onChange={this.handleChangeAuthor.bind(this)} />
          <input type="submit" value="Submit Book" />
        </form>
      </div>
    )
  }
}

export default NewBookForm;