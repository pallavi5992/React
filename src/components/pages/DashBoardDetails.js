import React, { useState, useEffect } from 'react'
import bar from '../../assets/img/bar.svg'
import DashboardvalidationCard from '../cards/DashboardvalidationCard';
import DashboardactionCard from '../cards/DashboardactionCard';
const DashBoardDetails = () => {
  return (
    <>
      <div className="main">
        <div className="container-fluid">
          <div className="content-wrapper">
            <div className="p-3 px-md-4">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6">
                  <div className="validation-check ">
                    <h2 className="fs-5 py-3 text-left">Validation Check
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                  <div className="validation-check ">
                    <h2 className="fs-5 py-3   text-left">Action Requise
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-3">
                  <DashboardvalidationCard />
                </div>
                <div className="col-12 col-sm-12 col-md-3">
                  <DashboardvalidationCard />
                </div>
                <div className="col-12 col-sm-12 col-md-3">
                  <DashboardactionCard />
                </div>
                <div className="col-12 col-sm-12 col-md-3">
                  <DashboardactionCard />
                </div>
              </div>
              <div className="Critique-box">
                <div className="card border-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-12">
                        <div className="validation-check ">
                          <h2 className="fs-5 py-2 text-left">Critique
                          </h2>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-7">
                        <div className="table-s-ts">
                          <div className="table-responsive">
                            <table className="table table-borderless">
                              <thead>
                                <tr>
                                  <th><i className="fa fa-user-circle" aria-hidden="true" /> Covid 19</th>
                                  <th>Saturation</th>
                                  <th>Poul</th>
                                  <th>Temperature</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <p className="marge-cr">Marge Cunningham</p>
                                    <p className="ans-cr">76 ans</p>
                                  </td>
                                  <td>
                                    <div className="dwn-9">
                                      92% <i className="fa fa-arrow-down" aria-hidden="true" />
                                    </div>
                                  </td>
                                  <td>
                                    <p className="ans-cr">65</p>
                                  </td>
                                  <td>
                                    <div className="dwn-9">
                                      390C
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-5">
                        <div className="satturation-temperature">
                          <div className="row d-flex align-items-center">
                            <div className="col-sm-4 col-md-4 d-flex justify-content-center">
                              <img className="img-fluid" src={bar} alt="" />
                            </div>
                            <div className="col-sm-4 col-md-8">
                              <div className="satturation-text mb-3">
                                <h5>Saturation</h5>
                                <p>92%</p>
                              </div>
                              <div className="satturation-text mb-3">
                                <h5>Temperature</h5>
                                <p>390 C</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12">
                        <div className="hr-style mt-5 mb-4" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-12">
                        <div className="validation-check ">
                          <h2 className="fs-5 py-2 text-left">Chute
                          </h2>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-7">
                        <div className="table-s-ts table-s-ts-pink">
                          <div className="table-responsive">
                            <table className="table table-borderless">
                              <thead>
                                <tr>
                                  <th><i className="fa fa-user-circle" aria-hidden="true" /> Covid 19</th>
                                  <th>Saturation</th>
                                  <th>Poul</th>
                                  <th>Temperature</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <p className="marge-cr">Marge Cunningham</p>
                                    <p className="ans-cr">76 ans</p>
                                  </td>
                                  <td>
                                    <div className="dwn-9">
                                      92% <i className="fa fa-arrow-down" aria-hidden="true" />
                                    </div>
                                  </td>
                                  <td>
                                    <p className="ans-cr">65</p>
                                  </td>
                                  <td>
                                    <div className="dwn-9">
                                      390C
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-5">
                        <div className="satturation-temperature">
                          <div className="row d-flex align-items-center">
                            <div className="col-sm-4 col-md-4">
                              <img className="img-fluid" src={bar} alt="" />
                            </div>
                            <div className="col-sm-4 col-md-8">
                              <div className="satturation-text mb-3">
                                <h5>Saturation</h5>
                                <p>92%</p>
                              </div>
                              <div className="satturation-text mb-3">
                                <h5>Temperature</h5>
                                <p>390 C</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12">
                        <div className="hr-style mt-5 mb-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DashBoardDetails;