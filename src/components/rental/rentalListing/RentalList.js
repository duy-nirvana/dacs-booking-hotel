import React, { Component } from 'react'
import RentalCard from './RentalCard';

class RentalList extends Component {
    constructor(props) {
        super(props);

        // this.handlePageChange = this.handlePageChange.bind(this);
    }

    renderRentals() {
        return this.props.rentals.map((rental, index) => {
            return(
                <RentalCard 
                    key={index}
                    rental={rental}
                />
            ) 
        })
    }

    // handlePageChange(newPage) {
    //     if (this.props.onPageChange) {
    //         this.props.onPageChange(newPage)
    //     }
    // }

    render() {
        // const {pagination} = this.props;
        // const {_page, _limit, _totalRows} = pagination;
        // const {totalPages} = Math.ceil(_totalRows / _limit);

        return (
            
                <div className="row">
                    {this.renderRentals()}
                    
                </div>
                // {/* <div className="row">
                //     <button 
                //         className="col-6 "
                //         disabled={_page <= 1}
                //         onClick={() => this.handlePageChange(_page - 1)}
                //     >Prev
                //     </button>

                //     <button 
                //         className="col-6 "
                //         disabled={_page >= totalPages}
                //         onClick={() => this.handlePageChange(_page + 1)}
                //     >Next
                //     </button>
                // </div> */}
        )
    }
}

export default RentalList;
