import React, { Component } from 'react';

export default class SnippetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: 'Yo momma',
      title: '',
      language: 'HTML',
      description: '',
      code: '',
    };
  }

  handleChange = evt => {
    const { value, name } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log('submitting snippetForm');
    this.props.onSubmit(this.state);
  };

  render() {
    const { title, language, description, code } = this.state;
    return (
      <div id="snippetFormContainer">
        <form id="createSnippet" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
          <select value={language} onChange={this.handleChange} name="language">
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="SQL">SQL</option>
          </select>
          <textarea
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={this.handleChange}
          />
          <textarea
            type="text"
            name="code"
            id="code"
            value={code}
            onChange={this.handleChange}
          />
          <button type="submit">Submit Yo Snip!</button>
        </form>
      </div>
    );
  }
}
