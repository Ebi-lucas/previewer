import { useState } from 'react';
import './App.scss';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...

Here's some inline code: \`<div></div>\`

\`\`\`js
// This is a multi-line code block
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

You can also make text **bold**... whoa!  
Or _italic_.  
Or... wait for it... **_both!_**  
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and  
> Block Quotes!

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- Bulleted list
  - With levels

1. Numbered
1. Lists

![Image](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

Now this line  
will break  
without needing two spaces!
`;

const markdownPlugins = [remarkGfm, remarkBreaks]; // ✅ Move array out of JSX

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ textAlign: 'center', color: 'green' }}>Markdown Previewer</h1>
        <div className="boxes-container">
          <textarea
            id="editor"
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
          />
          <div id="preview">
            <ReactMarkdown remarkPlugins={markdownPlugins}>
              {markdownText}
            </ReactMarkdown>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
