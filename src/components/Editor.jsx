import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = (props) => {
    const{
        language,
        displayName,
        value,
        onChange
    } = props;

    const handleChange=(editor, data, value)=>{
        onChange(value);
    };

    return (
        <div className="editor-container">
            <div className="relative editor-title bg-slate-900 text-gray-100 px-2 py-2 rounded-t-md shadow-lg flow-root">
                <div className=" inline-block float-left">{displayName}</div>
                <button className=" bg-gray-50 text-slate-900 px-2 items-center rounded-md float-right">O/C</button>
            </div>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers:true
                }}
            />
        </div>
    );
};

export default Editor;

