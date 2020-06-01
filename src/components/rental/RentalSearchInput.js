import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class RentalSearchInput extends Component {

    constructor() {
        super();

        this.searchInput = React.createRef();
    }

    handleSearch() {
        const { history } = this.props;
        const city = this.searchInput.current.value;

        city ? history.push(`/rentals/${city}/homes`): history.push('/rentals');
    }

    handleKeyPress(event) {
        if(event.key === 'Enter'){
            this.handleSearch();
        }
    }

    render() {
        return (
            <div className='form-inline my-2 input-group input-group-lg my-4'> 
                <input 
                    onKeyPress={(event) => {this.handleKeyPress(event)}}
                    ref={this.searchInput}
                    className='form-control mr-sm-2 bwm-search w-50 p-4' 
                    type='search' 
                    placeholder="Nhập điểm du lịch hoặc tên khách sạn" 
                    aria-label='Search'
                    
                >    
                </input>
                <button onClick={() => {this.handleSearch()}}
                    className='btn btn-warning btn-bwm-search'
                    style={{'marginLeft':'3px'}}
                    type='submit'>Tìm kiếm
                </button>
            </div>
        )
    }
}


export default withRouter(RentalSearchInput);