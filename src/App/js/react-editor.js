import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';


class Editor extends React.Component {
    editor = null;
    monaco = null

    constructor(props) {
        super(props);
    }

    editorDidMount = (editor, monaco) => {
        this.props.editorDidMount(editor, monaco);
        this.editor = editor;
        this.monaco = monaco;
    }

    onChange = (newValue, e) => {
        this.props.onChange(newValue);
    }

    onResize = () => {
        if (this.editor !== null)
            this.editor.layout();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.errors !== this.props.errors) {
            this.monaco.editor.setModelMarkers(this.editor.getModel(), "FSharpErrors", this.props.errors);
            this.onResize();
        }
    }

    render() {
        return (
            <div style={this.props.style}>
                <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
                <MonacoEditor
                    value={this.props.value}
                    options={this.props.options}
                    onChange={this.onChange}
                    editorDidMount={this.editorDidMount}
                // requireConfig={requireConfig}
                />
            </div>
        );
    }
}

function noop() { }

Editor.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    editorDidMount: PropTypes.func,
    options: PropTypes.object,
    errors: PropTypes.array,
    style: PropTypes.object
};

Editor.defaultProps = {
    onChange: noop,
    value: "",
    editorDidMount: noop,
    options: null,
    errors: [],
    style: { height: '100%', overflow: 'hidden' }
};

export default Editor;
