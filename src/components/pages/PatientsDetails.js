import React from 'react'
import pic from '../../assets/img/pic.png';
import { Link } from 'react-router-dom';
const PatientsDetails = () => {
  return (
    <>
      <div className="main">
        <div className="container-fluid">
          <div className="content-wrapper">
            <div className="p-3 px-md-4">
              <div className="profile-section">
                <div className="card">
                  <div className="profile-hedaer row">
                    <div className="col-md-8">
                      <div className="d-flex flex-wrap align-items-baseline">
                        <div className="profile-img">
                          <img src={pic} alt="" />
                        </div>
                        <h4 className="ms-3">INFORMATION PERSONNELLE</h4>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="profile-btn">
                        <button className="btn">Cancel</button>
                        <button className="btn">Save</button>
                      </div>
                    </div>
                  </div>
                  <div className="profile-content">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Prenom</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Andrew"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Nom</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Anderson"
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Age</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="66 ans"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Sex</label>
                          <input
                            type="email"
                            className="form-control"
                            defaultValue="Male"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            defaultValue="Andrew@gmail.com"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Telephone</label>
                          <input
                            type="number"
                            className="form-control"
                            defaultValue="123456987"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Abonnement</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Covid19"
                          />
                      
                        </div>
                      </div>
                    </div>
                    <div className="row">
                            <div className="col-md-8"></div>
                           <div className="col-md-4">
                      <div className="profile-btn">
                       
                       <Link to="/PatientsScreen"> <button className="btn" style={{backgroundColor: "#220382",color:"white",float:"right"}}>Back</button></Link>
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

export default PatientsDetails;