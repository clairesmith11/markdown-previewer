import React, { Component } from 'react';

import './App.css';
import Editor from './Components/Editor';
import Previewer from './Components/Preview';




let placeholder = `# Welcome to my React Markdown Previewer!

## Type your markdown in the **editor** box to begin.

Visit [marked](https://marked.js.org/) to learn more!

You can write code like this: <code><h1>Hello World!</h1></code>

Or like this: \`<div></div>\`, between 2 backticks.

How To Use The Demo
-------------------

    1. Type in stuff above.
    2. See the live updates below.

  - **Type in boldface for emphasis**  
  - *Or try italics!*    


**So why markdown?** As the creator of markdown says,

  > The overriding design goal for Markdown's
  > formatting syntax is to make it as readable
  > as possible. The idea is that a
  > Markdown-formatted document should be
  > publishable as-is, as plain text, without
  > looking like it's been marked up with tags
  > or formatting instructions.

Brought to you by ![React Logo w/ Text](https://goo.gl/Umyytc)`;

class App extends React.Component {
  state= { 
      markdown: placeholder,
      editorView: true,
      previewView: true
  }
  handleChange = (event) => {
    this.setState({markdown: event.target.value})
  }
  toggleEditorHandler = () => {
      this.setState({editorView: !this.state.editorView})
  }
  togglePreviewHandler = () => {
      this.setState({previewView: !this.state.previewView})
  }
  render() {
    return(
      <div>
        <Editor 
            markdown={this.state.markdown} 
            changed={this.handleChange} 
            toggle={this.toggleEditorHandler}
            show={this.state.editorView}
         />
        <Previewer 
            markdown={this.state.markdown}
            toggle={this.togglePreviewHandler}
            show={this.state.previewView} />
      </div>
    )
  }
}


export default App;
