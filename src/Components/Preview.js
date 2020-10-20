import React from 'react';
import marked from "marked";
import Toggle from './Toggle';

//Configure marked 
marked.setOptions({
  breaks: true,
});


const Previewer = props => {
    const renderer = new marked.Renderer();
    renderer.link = function(href, title, text) {
        return `<a target="_blank" href="${href}">${text}` + '</a>';
    };

  return (
    <div className="previewContainer">
        <div className="heading">
            <h2 className="title">Preview</h2>
            <Toggle clicked={props.toggle} toggled={props.show} />
        </div>
      <div
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: renderer })
      }}
      id='preview'
      className={props.show ? 'show' : 'hidden'}
    />
    </div>
  );
};

export default Previewer;