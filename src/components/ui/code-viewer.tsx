import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-dark.css'; //Example style, you can use another

function CodeViewer({ code }: { code: string }) {
    return (
        <div className='w-full my-2 overflow-hidden border rounded-sm border-c-gray bg-c-dark2 dark:border-c-dark1'>
            <Editor
                value={code}
                readOnly
                onValueChange={console.log}
                highlight={code => highlight(code, languages.javascript, "javascript")}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 14,
                    overflow: "auto", // Enables scrolling
                    whiteSpace: "nowrap", // Prevents wrapping
                    display: 'block'
                }}
                onCopy={console.log}
            />
        </div>
    );
}

export default CodeViewer;