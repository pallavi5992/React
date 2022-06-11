import React from 'react'
import { Validation_Check } from '../../ApiData'
import { Link } from 'react-router-dom';
const DashboardvalidationCard = () => {
    return (
        <div className="widget-stats">
            <div className="card border-0">
            <div class="card-body">
                                        <div class="d-flex">
                                            <div class="widget-stats-icon">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                            </div>
                                            <div class="widget-stats-content flex-fill ps-3">
                                                <span class="widget-stats-title">Bill Baker</span>
                                                <span class="widget-stats-amount">68 ans</span>
                                            </div>

                                            <div class="custom-switch-btn">
                                                <label class="switch">
                                                    <input type="checkbox"/>
                                                    <span class="slider round"></span>
                                                  </label>
                                            </div>

                                        </div>
                                        <div class="widget-stats-indicator align-self-start mt-3">
                                            <span>Covid 19</span>
                                            <span>
                                           
                                            <Link to="/PatientList"> <button class="btn" style={{backgroundColor:"#6D55C1",color:"white",float:"right"}}>More</button></Link>
                                                </span>
                                        </div>
                                    </div>
      
        </div>

</div>

    )
}

export default DashboardvalidationCard