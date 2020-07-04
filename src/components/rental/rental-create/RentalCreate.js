import React, { Component } from 'react'
import CreateRentalForm from './RentalCreateForm';
import * as actions from '../../../actions';
import { Redirect } from 'react-router-dom';
import shiba3 from '../../../styles/img/shiba3.jpg'

class RentalCreate extends Component {
    constructor() {
        super();

        this.rentalsCategories = ['Hotel','Motel','Homestay'];

        this.state = {
            errors: [],
            redirect: false
        }

        this.createRental = this.createRental.bind(this);
    }

    createRental(rentalData) {
        console.log("rentalData: ", rentalData);
        actions.createRental(rentalData, true).then(
            (rental) => this.setState({redirect: true}),
            (errors) => this.setState({errors})
        ) 
    }

    render() {
        if(this.state.redirect){
            return <Redirect to={{pathname: '/rentals'}} />
        }

        return (
            <section id='newRental'>
                <div className='bwm-form'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <h1 className='page-title'>Tạo phòng của bạn</h1>
                            <CreateRentalForm 
                                createRental={this.createRental} 
                                errors={this.state.errors} 
                                options={this.rentalsCategories}  
                            />
                        </div>
                        <div className='col-md-6 ml-auto'>
                            <div className='image-container'>
                                <img src={shiba3} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default RentalCreate;