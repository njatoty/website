import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx'; // Keep this as well
import 'prismjs/themes/prism-tomorrow.css'; //Example style, you can use another

function CodeViewer({ code }: { code: string }) {
    return (
        <div className='flex w-full max-w-full my-2 overflow-x-auto border rounded-sm border-c-gray bg-c-dark2 dark:border-c-dark1'>
            <Editor
                value={code}
                readOnly
                onValueChange={console.log}
                highlight={code => highlight(code, languages.tsx, "tsx")}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 14,
                }}
                onCopy={console.log}
                className='code-viewer'
            />
        </div>
    );
}

export default CodeViewer;