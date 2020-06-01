import  React  from 'react';
import { Link } from 'react-router-dom';
import { pretifyDate } from './../../helpers/index';

export class RentalManageCard extends React.Component {

    constructor() {
        super();

        this.state = {
            wantDelete: false
        }
    }

    showDeleteMenu() {
        this.setState({
            wantDelete: true
        })
    }

    closeDeleteMenu() {
        this.setState({
            wantDelete: false
        })  
    }

    render() {

        const { rental, modal, callback, rentalIndex } = this.props;
        const { wantDelete } = this.state;

        const deleteClass = wantDelete ? 'toBeDeleted' : '';

        return (
            <div className='col-md-4'>
                <div className={`card text-center ${deleteClass}`}>
                    <div className='card-block'>
                        <h4 className='card-title'>{rental.title} - {rental.city.toUpperCase()}</h4>
                        <Link className='btn btn-bwm p-4 bg-primary' to={`/rentals/${rental._id}`}>Đi đến phòng này</Link>
                        { rental.bookings && rental.bookings.length > 0 && modal }
                    </div>
                    <div className='card-footer text-muted'>
                        {
                            !wantDelete && 
                            <p>Đã tạo vào {pretifyDate(rental.createdAt)}</p>
                        }
                        {   !wantDelete && 
                            <React.Fragment>
                                <button onClick={() => {this.showDeleteMenu()}} className='btn btn-danger'> Xóa </button>
                                <Link className='btn btn-warning' to={{pathname: `/rentals/${rental._id}`, state: { isUpdate: true }}}>Sửa</Link>
                            </React.Fragment>
                        }
                        {
                            wantDelete && 
                            <React.Fragment>
                                Bạn có chắc chắn muốn xóa?
                                <button className='btn btn-danger' onClick={() => {callback(rental._id, rentalIndex); this.closeDeleteMenu() }}> Có </button>
                                <button className='btn btn-success' onClick={() => {this.closeDeleteMenu()}}> Không </button>
                            </React.Fragment>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default RentalManageCard;
