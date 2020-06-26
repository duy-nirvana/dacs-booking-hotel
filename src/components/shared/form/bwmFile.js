import React, { Component } from 'react';


export default class bwmFile extends Component {

    constructor() {
        super();

        this.onChange = this.onChange.bind(this);
        this.state = {
            selectedFile: null,
        }
    }

    onChange(event){
        const { input: {onChange} } = this.props;
        onChange(event.target.files[0]);
    }

    render() {

        const {label, meta: {touched, error} } = this.props;

        return (
            <div className="form-group">
                <label>{label}</label>
                <div className="input-group">
                    <input 
                        type='file' 
                        accept='.jpg, .png, .jpeg'
                        onChange={this.onChange} 
                    />
                </div>
                {touched &&
                    ((error && <div className="alert alert-danger">{error}</div>))}
            </div>
        )
    }
}
