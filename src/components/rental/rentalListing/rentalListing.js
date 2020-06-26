import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux';

import * as actions from '../../../actions';
import  RentalList  from './RentalList';
import RentalSearchInput from '../RentalSearchInput';
import TopCities from '../top-cities/TopCities';
import Footer from '../../shared/Footer';
import usePagination from 'react-use-paging';
import RentalCard from './RentalCard';

function RentalListing(props){
    // constructor(props) {
    //     super(props);

    //     // this.state = {
    //     //     pagination: {
    //     //         _page: 1,
    //     //         _limit: 5,
    //     //         _totalRows: 20,
    //     //     }
    //     // }
    
    //     // this.handlePageChange = this.handlePageChange.bind(this);
    
    // }
    
    // handlePageChange(newPage) {
        //     console.log(newPage)
        // }
        
        // componentWillMount() {
            
            // }
    const { items, pages, setCurrentPage, currentPage } = usePagination(
        props.rentals,
        {
            resultPerPage: 8,
            alwaysVisible: false // First page won't show if all results are in one page.
        }
    );
    useEffect(() => {
        return props.dispatch(actions.fetchRentals());
        
    }, [])

    
    return (
        <div>
            <RentalSearchInput />
            
            <section id="rentalListing">
                <h1 className="page-title text-center">KHÁCH SẠN, KHU NGHỈ DƯỠNG, NHÀ TRỌ & HƠN THẾ NỮA</h1>
                {
                    props.rentals ? 
                    <div>
                        {/* <RentalList 
                            rentals={props.rentals} 
                            // pagination={this.state.pagination}
                            // onPageChange={this.handlePageChange}
                        />  */}
                        <div className="row">
                            {items.map(item => (
                                <RentalCard rental={item}  key={item.id}  />
                            ))}
                        </div>
                        <div className="text-center mb-5">
                            {pages.map(page => (
                                <button
                                    key={page}
                
                                    // You add style to the current page by cheking the current page you are on.
                                    className={page === currentPage ? 'disabled btn btn-dark btn-lg' : 'btn btn-outline-dark btn-lg'}
                                    onClick={() => setCurrentPage(page)}
                                    >
                                    {page}
                                </button>
                            ))}

                        </div>
                        <TopCities />
                    </div>
                        
                    : 
                        "Loading ..."
                }
            
            </section>
        </div>
                
        )
}

function mapStateToProps(state) {
    return {
        rentals: state.rentals.data
    }
}


export default connect(mapStateToProps)(RentalListing);
