import React, { Component } from 'react';

class NewBookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title : ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addBook(this.state.title);
  }

  handleChange(e) {
    this.setState({
      title : e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input type="text" placeholder="title" onChange={this.handleChange.bind(this)} />
          <input type="submit" value="Submit Title" />
        </form>
      </div>
    )
  }
}

export default NewBookForm;