import React from 'react';
import Toggle from './Toggle';


const Editor = props => {
  return (
    <div className="editorContainer">
        <div className="heading">
            <h2 className="title">Editor</h2>
            <Toggle clicked={props.toggle} toggled={props.show}/>
        </div>
        <textarea
        id="editor"
        className={props.show ? 'show': 'hidden'}
        value={props.markdown}
        onChange={props.changed}
      />
    </div>
  );
};

export default Editor;