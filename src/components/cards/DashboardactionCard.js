import React from 'react'
import { action_Requise } from '../../ApiData'

const DashboardactionCard = () => {
    return (
        <div className="widget-stats widget-stats-pink">
        <div class="card border-0">
                                    <div class="card-body">
                                        <div class="d-flex">
                                            <div class="widget-stats-icon">
                                                <i class="fa fa-user" aria-hidden="true"></i>
                                            </div>
                                            <div class="widget-stats-content flex-fill ps-3">
                                                <span class="widget-stats-title">Shannon Doherty</span>
                                                <span class="widget-stats-amount">68 ans</span>
                                            </div>
                                        </div>
                                        <div class="widget-stats-indicator align-content-center d-flex justify-content-between mt-3">
                                            <h5>Covid 19</h5>
                                            <p>Oxygene</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
  
    )
}

export default DashboardactionCard