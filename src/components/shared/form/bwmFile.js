import React, { Component } from 'react'

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

        onChange('https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/12/image.jpeg');
        // console.log(event.target.files[0])
        // this.setState({
        //     selectedFile: 
        // })
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
