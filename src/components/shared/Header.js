import React, { Component } from 'react';
import './Header.scss';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import RentalSearchInput from '../rental/RentalSearchInput';
import logo from '../../../src/styles/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {

    constructor() {
        super();
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout();
        this.props.history.push('/login');
    }

    renderAuthBtn(isAuth) {
        if(isAuth){
            return <a className="nav-item nav-link clickable text-muted" onClick={this.handleLogout}>Đăng xuất</a>
            
        }

        return(
            <React.Fragment>
                <Link type="button" className='text-light nav-item nav-link login-btn btn btn-primary mr-lg-2' to='/login'>Đăng nhập <span className='sr-only'>(current)</span></Link>
                <Link className='text-light nav-item nav-link signin-btn btn btn-outline-primary' to='/register'>Tạo tài khoản</Link>
            </React.Fragment> 
        )
    }

    renderOwnerSection(isAuth) {
        if(isAuth){
            return (
                <div className='nav-item dropdown'>
                    <a className='nav-link nav-item dropdown-toggle clickable' id='navbarDropdownMenuLink' data-toggle='dropdown' >
                        <FontAwesomeIcon className="fa-lg" icon={faUserCircle} />
                    </a>
                    <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                        <Link className='dropdown-item' to='/rentals/new'>Cho thuê phòng</Link>
                        <Link className='dropdown-item' to='/rentals/manage'>Quản lý phòng</Link>
                        <Link className='dropdown-item' to='/bookings/manage'>Quản lý phòng đã đặt</Link>
                    </div>
                </div>
            )
        }
    }

    render() {

        const {username, isAuth} = this.props.auth;

        return(
            <nav className='navbar navbar-dark navbar-expand-lg'>
                <div className='container'>
                    <Link className='navbar-brand' to='/rentals'><img src={logo} width="50"></img></Link>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup'
                            aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                        <div className='navbar-nav ml-auto'>
                            {
                                isAuth && 
                                <a className='nav-item nav-link clickable'> Xin chào, {username}!</a>
                            }
                            {this.renderOwnerSection(isAuth)}
                            {this.renderAuthBtn(isAuth)}
                        </div>
                    </div>
                </div>
            </nav>   
        )
    }
}


function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default withRouter(connect(mapStateToProps)(Header));