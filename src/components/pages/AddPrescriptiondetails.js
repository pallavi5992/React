import React from 'react'

const AddPrescriptiondetails = () => {
  return (
    <div>
      <div className="main" style={{ color: "gray" }}>
        <div className="container-fluid">
          <div className="content-wrapper">
            <div className="p-3 px-md-4">
              <div className="Critique-box">
                <div className="card border-0">
                  <div className="card-body">
                    <div className="profile-content prescription-content">
                      <div className="row">
                        <div className="page-heading" style={{ width: "100%", height: "50px", backgroundColor: "#F72F5A", color: " #fff", }}>
                          <h4 style={{ margin: "10px", textAlign: "center" }}> Ajout d'une ordonnance a Sophie Coulan</h4>
                        </div>
                        <div className="col-md-12">
                          <p>Dr.Ali AFDJEI</p>
                        </div>
                        <div className="col-md-12">
                          <p>Hopital de parly2</p>
                        </div>
                        <div className="col-md-12">
                          <p>21 rue Moxourij</p>
                        </div>
                        <div className="col-md-12">
                          <p>Tel :-123456789</p>
                        </div>
                        <div className="col-md-12">
                          <p>n*123456789</p>
                        </div>
                        <hr />
                        <h4>Ordonnance</h4>
                        <div className="col-md-12">
                          <p>Vill,le DD/MM/AAAA</p>
                        </div>
                        <div className="col-md-12">
                          <p>Nom du patient,age,poid</p>
                        </div>

                        <hr />
                        <div className="col-md-3">
                          <div class="form-check">
                            <label class="form-check-label" for="flexCheckDefault">
                              Litre/
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div class="form-check">
                            <label class="form-check-label" for="flexRadioDefault1" defaultChecked >
                              Minutes
                            </label>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div class="form-check">
                            <label class="form-check-label" for="flexRadioDefault1">
                              Heures
                            </label>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div class="form-check">
                            <label class="form-check-label" for="flexRadioDefault1">
                              Lunettes
                            </label>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div class="form-check">
                            <label class="form-check-label" for="flexRadioDefault1">
                              Masque
                            </label>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div class="custom-switch-btn"> Extracteur
                            <label class="switch">
                              <input type="checkbox" />
                              <span class="slider round"></span>
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div class="custom-switch-btn">  Appareillage
                            <label class="switch">
                              <input type="checkbox" />
                              <span class="slider round"></span>
                            </label>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div class="form-check">
                            QSP Pour
                            <label class="form-check-label" for="flexCheckDefault">
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              jours
                            </label>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              Semaine
                            </label>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              Mois
                            </label>
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
  )
}

export default AddPrescriptiondetails