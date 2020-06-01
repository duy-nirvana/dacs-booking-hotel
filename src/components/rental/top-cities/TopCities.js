import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import hcm_city from '../../../styles/img/hcm_city.jpg';
import vungtau from '../../../styles/img/vungtau.jpg';
import nhatrang from '../../../styles/img/nhatrang.jpg';
import dalat from '../../../styles/img/dalat.jpg';
import hanoi from '../../../styles/img/hanoi.jpg';
import danang from '../../../styles/img/danang.jpg';


import '../../../styles/rental/_top-cities.scss'

function TopCities(props) {
  return (
    <div className="top-cities">
      <h3 className="text-center">Điểm đến phổ biến nhất</h3>
      <div className="row">
        <div className="col-4 col-md-2">
          <Link className='rental-detail-link rental-card'  to={'/rentals/Vũng%20Tàu/homes'}>
            <div className="card border border-light cities">
              <img className="card-img-top" src={vungtau} alt="Card image cap" />
              <div className="card-body p-0 text-center cities-info">
                <p className="card-text m-0 font-weight-bold">Vũng Tàu</p>
                <p className="card-text text-muted">Việt Nam</p>
              </div>
            </div> 
          </Link>
        </div>
        <div className="col-4 col-md-2">
          <Link className='rental-detail-link rental-card'  to={'/rentals/Hồ%20Chí%20Minh/homes'}>
            <div className="card border border-light cities">
              <img className="card-img-top" src={hcm_city} alt="Card image cap" />
              <div className="card-body p-0 text-center cities-info">
                <p className="card-text m-0 font-weight-bold">Hồ Chí Minh</p>
                <p className="card-text text-muted">Việt Nam</p>
              </div>
            </div> 
          </Link>
        </div>
        <div className="col-4 col-md-2">
          <Link className='rental-detail-link rental-card'  to={'/rentals/Đà%20Lạt/homes'}>
            <div className="card border border-light cities">
              <img className="card-img-top" src={dalat} alt="Card image cap" />
              <div className="card-body p-0 text-center cities-info">
                <p className="card-text m-0 font-weight-bold">Đà Lạt</p>
                <p className="card-text text-muted">Việt Nam</p>
              </div>
            </div> 
          </Link>
        </div>
        <div className="col-4 col-md-2">
          <Link className='rental-detail-link rental-card'  to={'/rentals/Đà%20Nẵng/homes'}>
            <div className="card border border-light cities">
              <img className="card-img-top" src={danang} alt="Card image cap" />
              <div className="card-body p-0 text-center cities-info">
                <p className="card-text m-0 font-weight-bold">Đà Nẵng</p>
                <p className="card-text text-muted">Việt Nam</p>
              </div>
            </div> 
          </Link>
        </div>
        <div className="col-4 col-md-2">
          <Link className='rental-detail-link rental-card'  to={'/rentals/Nha%20Trang/homes'}>
            <div className="card border border-light cities">
              <img className="card-img-top" src={nhatrang} alt="Card image cap" />
              <div className="card-body p-0 text-center cities-info">
                <p className="card-text m-0 font-weight-bold">Nha Trang</p>
                <p className="card-text text-muted">Việt Nam</p>
              </div>
            </div> 
          </Link>
        </div>
        <div className="col-4 col-md-2">
          <Link className='rental-detail-link rental-card'  to={'/rentals/Hà%20Nội/homes'}>
            <div className="card border border-light cities">
              <img className="card-img-top" src={hanoi} alt="Card image cap" />
              <div className="card-body p-0 text-center cities-info">
                <p className="card-text m-0 font-weight-bold">Hà Nội</p>
                <p className="card-text text-muted">Việt Nam</p>
              </div>
            </div> 
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default TopCities;