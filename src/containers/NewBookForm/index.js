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
    this.props.addBook(this.state.title);
    this.props.addBook(this.state.author);
  }

  handleChange(e) {
    this.setState({
      title : e.target.value,
      author : e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input type="text" name="title" placeholder="title" onChange={this.handleChange.bind(this)} />
          <input type="text" name="author" placeholder="author" onChange={this.handleChange.bind(this)} />
          <input type="submit" value="Submit Book" />
        </form>
      </div>
    )
  }
}

export default NewBookForm;