import React from 'react'
import Layout from '../../layout/Layout';
import profile from '../../assets/img/profile.png';
const Doctorprofile = () => {
  return (
    <Layout>
     
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
                        <img src={profile} alt="" />
                      </div>
                      <h4 className="ms-3">Profile</h4>
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
                        <label htmlFor="">Specialite</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Pneumologue"
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
                          defaultValue={380507685464}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">N0 RPPS</label>
                        <input
                          type="number"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">ADELI</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">ADELI</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ADELI"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">Lieu du consultation 1</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Lieu du consultation 1"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">Nom</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nom"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">Adresse</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Adresse"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">Ville</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Ville"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">Code Postal</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Code Postal"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="">Telephone</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Telephone"
                        />
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
 
    </Layout>
  )
}

export default Doctorprofile