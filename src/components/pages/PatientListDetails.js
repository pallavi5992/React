import React, { useState } from 'react'
import { patient_List } from '../../ApiData';
import pic from '../../assets/img/pic.png';
const PatientListDetails = () => {
  const [data, setData] = useState(patient_List);
  return (
    <>
      <div className="main">
        <div className="container-fluid">
          <div className="content-wrapper">
            <div className="p-3 px-md-4">
              <div className="Critique-box">
                <div className="card border-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6">
                        <div className="validation-check ">
                          <h2 className="fs-5 py-2 text-left">
                            Patients a Valider
                          </h2>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6">
                        <div className="validation-check-savoir">
                          <h2 className="fs-5 py-2 text-left">
                            En savoir plus?{" "}
                            <i className="fa fa-info-circle" aria-hidden="true" />
                          </h2>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12">
                        <div className="table-patients-valider">
                          <div className="table-responsive">
                            <table className="table  table-striped table-hover">
                              <thead>
                                <tr>
                                  <th>Patient</th>
                                  <th>Abonnement</th>
                                  <th>Date de debut</th>
                                  <th>Date de fin</th>
                                  <th>Informations</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  data.map((items) => (
                                    <tr key={items.id}>
                                      <td>
                                        <img
                                        className="rounded-circle mx-2"
                                        width={32}
                                        height={32}
                                        src={pic}
                                        alt=""
                                      />{" "}{items.patient}</td>
                                      <td>{items.Abonnement}</td>
                                      <td>{items.Datededebut}</td>
                                      <td>{items.Datedefin}</td>
                                      <td>{items.information}</td>
                                      <td><td><div className="d-flex align-items-center">
                                        
                                          {" "}
                                          <button class="btn" style={{backgroundColor:"#f5222d",color:"white",float:"right"}}>Supprime</button>
                                       
                                   &nbsp; &nbsp;
                                          {" "}
                                          <button class="btn" style={{backgroundColor:"#5cdbd3",color:"white",float:"right"}}>RDV</button>
                                      
                                          &nbsp; &nbsp;
                                        <button class="btn" style={{backgroundColor:"#6D55C1",color:"white",float:"right"}}>Ajouter</button>
                                      
                                      </div></td>

                                      </td>
                                      <td />
                                    </tr>
                                  ))
                                }
                              </tbody>
                            </table>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="prevoius-btn">
                              <button>
                                <i
                                  className="fa fa-angle-left"
                                  aria-hidden="true"
                                />
                                Prevoius
                              </button>
                            </div>
                            <div className="pagination-p">
                              <ul className="pagination">
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    1
                                  </a>
                                </li>
                                <li className="page-item active">
                                  <a className="page-link" href="#">
                                    2
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    3
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    4
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    5
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
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
export default PatientListDetails