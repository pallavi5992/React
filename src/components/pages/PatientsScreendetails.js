import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const PatientsScreendetails = () => {
  const navigate = useNavigate()
  const [tab, settab]=useState(
   
     true
  
    )
  const [tab2, settab2]=useState(false)
  const [tab3, settab3]=useState(false)
  //  const Ontab = ()=>{

  //   settab(!tab)
  //   settab2(false)
  //   settab3(false)
  //  }
   const Ontab2 = ()=>{
    settab2(!tab2)
    settab(false)
    settab3(false)
   }
    const Ontab3 = ()=>{
    settab3(!tab3)
    settab2(false)
    settab(false)
 
   }
   const Ontab = (e:React.MouseEvent<HTMLButtonElement>) => {
    switch (e.detail) {
      case 1:
        settab(!tab)
    settab2(false)
    settab3(false)
        break;
      case 2:
        {
          navigate("/patients")
        }
        break;
    
    }
  };

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
                        <h2 className="fs-5 py-2 text-left">Patients</h2>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 p-0">
                      <div className="validation-check-savoir">
                        <h2 className="fs-5 py-2 text-left">
                          Afficher Patient Acif uniquement
                        </h2>
                        <label className="switch">
                          <input className="switch-input" type="checkbox" />
                          <span
                            className="switch-label"
                            data-on="On"
                            data-off="Off"
                          />
                          <span className="switch-handle" />
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-sm-3 col-md-3 p-0">
                      <div className="table--valider tablePatient">
                        <div className="table-responsive">
                          <table className="table  table-striped table-hover mb-0">
                            <thead>
                              <tr>
                                <th>Identites</th>
                                <th className="float-end">Etat</th>
                              </tr>
                            </thead>
                          </table>
                          <div
                            className="nav flex-column nav-pills"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                           
                          >
                             <button
                              className={`nav-link ${ tab ? "active" : ""}`}
                              
                              id="v-pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-home"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-home"
                              aria-selected={tab ? true :false}
                             
                              onClick={Ontab}
                            >
                            
                                  <i
                                className="fa fa-user-circle"
                                aria-hidden="true"
                              />
                     
                      <span>Adèle(68 ans) </span>
                             
                              <i
                                className="fa fa-circle float-end circle-danger"
                                aria-hidden="true"
                              />
                            </button>
                            <button
                               className={`nav-link ${ tab2 ? "active" : ""}`}
                              id="v-pills-profile-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-profile"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-profile"
                              aria-selected={tab2 ? true :false}
                              onClick={Ontab2}
                            >
                              <i
                                className="fa fa-user-circle"
                                aria-hidden="true"
                              />{" "}
                              Bill Baker(66 ans)
                         
                              <i
                                className="fa fa-circle float-end circle-warning"
                                aria-hidden="true"
                              />
                            </button>
                       <button
                                  className={`nav-link ${ tab3 ? "active" : ""}`}
                              id="v-pills-messages-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-messages"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-messages"
                              aria-selected="false"
                              onClick={ Ontab3}
                            >
                              <i
                                className="fa fa-user-circle"
                                aria-hidden="true"
                              />{" "}
                               Andrèw  (62 ans)
                              <i
                                className="fa fa-circle float-end circle-danger"
                                aria-hidden="true"
                              />
                            </button>
                          <button
                              className="nav-link"
                              id="v-pills-settings-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-settings"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-settings"
                              aria-selected="false"
                            >
                              <i
                                className="fa fa-user-circle"
                                aria-hidden="true"
                              />{" "}
                             {/* Andrew Anderson{" "} */}
                              <i
                                className="fa fa-circle float-end circle-warning"
                                aria-hidden="true"
                              />
                            </button>
                            <button
                              className="nav-link"
                              
                              id="v-pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-home"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-home"
                              aria-selected={tab ? true :false}
                             
                              onClick={Ontab}
                            >
                            
                                  <i
                                className="fa fa-user-circle"
                                aria-hidden="true"
                              />
                              {/* </Link> */}
                      {/* <span> Andrew Anderson </span> */}
                              {/* <i
                                className="fa fa-circle float-end circle-danger"
                                aria-hidden="true"
                              /> */}
                            </button>
                            <button
                              className="nav-link"
                              id="v-pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-home"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-home"
                              aria-selected={tab ? true :false}
                             
                              onClick={Ontab}
                            >
                            
                                  <i
                                className="fa fa-user-circle"
                                aria-hidden="true"
                              />
                              {/* </Link> */}
                      {/* <span> Andrew Anderson </span> */}
                              {/* <i
                                className="fa fa-circle float-end circle-danger"
                                aria-hidden="true"
                              /> */}
                            </button>
                            <button
                              className="nav-link"
                              id="v-pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-home"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-home"
                              aria-selected={tab ? true :false}
                            >
                                  <i
                                className="fa fa-user-circle"
                                aria-hidden="true"
                              />
                          
                      {/* <span> Andrew Anderson </span> */}
                              {/* <i
                                className="fa fa-circle float-end circle-danger"
                                aria-hidden="true"
                              /> */}
                            </button>
                            <button
                              className="nav-link"
                              id="v-pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-home"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-home"
                              aria-selected={tab ? true :false}
                            
                            >
                            
                                  <i
                                className="fa fa-user-circle"
                                aria-hidden="true"
                              />
                              {/* </Link> */}
                      {/* <span> Andrew Anderson </span> */}
                              {/* <i
                                className="fa fa-circle float-end circle-danger"
                                aria-hidden="true"
                              /> */}
                            </button>
                            <button
                              className="nav-link"
                              id="v-pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-home"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-home"
                              aria-selected={tab ? true :false}
                              onClick={Ontab}
                            >
                                  <i
                                className="fa fa-user-circle"
                                aria-hidden="true"
                              />
                  
                              {/* <i
                                className="fa fa-circle float-end circle-danger"
                                aria-hidden="true"
                              /> */}
                            </button>
                            <button
                              className="nav-link"
                              
                              id="v-pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-home"
                              type="button"
                              role="tab"
                              aria-controls="v-pills-home"
                              aria-selected={tab ? true :false}
                             
                            >
                            
                                  <i
                                className="fa fa-user-circle"
                                aria-hidden="true"
                              />
                              {/* </Link> */}
                      <span>  </span>
                              {/* <i
                                className="fa fa-circle float-end circle-danger"
                                aria-hidden="true"
                              /> */}
                            </button>
                       
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-9 col-md-9 p-0">
                      <div className="tab-content" id="v-pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="v-pills-home"
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab"
                        >
                          <div className="table-patients-valider tablePatient">
                            <div className="table-responsive">
                              <table className="table  table-striped table-hover">
                                <thead>
                             {tab2==false ?<tr>
                                    <th>BPM</th>
                                    <th>Oxygene</th>
                                    <th>Temperature</th>
                                    <th>Abonnement</th>
                                    <th>Date Debut</th>
                                    <th>Duree</th>
                                    <th>Ordonnance</th>
                                    <th>Sous Oxygene</th>
                                  </tr>:<tr>
                                    <th>Identites</th>
                                    <th>Oxygene</th>
                                    <th>Temperature</th>
                                    <th>Abonnement</th>
                                    <th>Date Debut</th>
                                    <th>Duree</th>
                                    <th>Ordonnance</th>
                                    <th>Sous Oxygene2</th>
                                  </tr> }     
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-danger">89%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                    <Link to ="" style={{textDecoration:"none",color:"black"}}>   <button className="btn">Voir</button></Link>
                                    </td>
                                   <td>---</td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-warning">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                    <td> <Link to="/addPrescription"><button class="btn"  style={{backgroundColor:"rgb(92, 219, 211)",color:"white",float:"right"}} >Ajouter</button></Link></td>
                                    </td>
                                    <td><span style={{backgroundColor:"black",color:"white",width:"650px",height:""}}>O<sub>2</sub></span></td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-danger">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voir</button>
                                    </td>
                                    <td>---</td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-warning">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voir</button>
                                    </td>
                                    <td>---</td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-danger">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voir</button>
                                    </td>
                                    <td>---</td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-warning">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voir</button>
                                    </td>
                                    <td>---</td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-danger">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voir</button>
                                    </td>
                                    <td>---</td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-warning">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voir</button>
                                    </td>
                                    <td>---</td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-danger">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voir</button>
                                    </td>
                                    <td>---</td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-warning">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voir</button>
                                    </td>
                                    <td>---</td>
                                  </tr>
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
                        <div
                          className="tab-pane fade"
                          id="v-pills-profile"
                          role="tabpanel"
                          aria-labelledby="v-pills-profile-tab"
                        >
                          <div className="table-patients-valider tablePatient">
                            <div className="table-responsive">
                              <table className="table  table-striped table-hover">
                                <thead>
                                  <tr>
                                    <th>Identites</th>
                                    <th>Oxygene2</th>
                                    <th>Temperature2</th>
                                    <th>Abonnement2</th>
                                    <th>Date Debut2</th>
                                    <th>Duree2</th>
                                    <th>Ordonnance2</th>
                                    <th>Sous Oxygene2</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Covid 19 </td>
                                    <td>
                                      <span className="span-danger">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voir</button>
                                    </td>
                                    <td>---</td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-warning">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voir</button>
                                    </td>
                                    <td>---</td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-danger">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voir</button>
                                    </td>
                                    <td>---</td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-warning">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voirhfghfgh</button>
                                    </td>
                                    <td>jkhjkhjkhjtd</td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-danger">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voir</button>
                                    </td>
               
                                    <td>---</td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-warning">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voir</button>
                                    </td>
                                    <td>---</td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-danger">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voir</button>
                                    </td>
                                    <td>---</td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-warning">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voir</button>
                                    </td>
                                    <td>---</td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-danger">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voir</button>
                                    </td>
                                    <td>---</td>
                                  </tr>
                                  <tr>
                                    <td>Covid 19</td>
                                    <td>
                                      <span className="span-warning">92%</span>
                                    </td>
                                    <td>
                                      38.2 <sup>0</sup>{" "}
                                    </td>
                                    <td>Covid 19</td>
                                    <td>05/14/2022</td>
                                    <td>15 jours</td>
                                    <td>
                                      <button className="btn">Voir</button>
                                    </td>
                                    <td>---</td>
                                  </tr>
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
      </div>
    </div>
  </>
  )
}

export default PatientsScreendetails