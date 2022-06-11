import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { patient_List } from '../../ApiData';
import { doctor_list } from "../../ApiData"
import Modal from 'react-modal';
import pic from '../../assets/img/pic.png';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const customStyles = {
    content: {
        width: "550px",
        height: "300px",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const DoctorlistDetails = () => {
    const [doctordata, setdoctorData] = useState(doctor_list);
    const [modalIsOpen, setIsOpen] =useState(false);
    const [modalIsOpenupdate, setIsOpenUpdate] =useState(false);
    const [inputFrom, setInputFrom] = useState();
    const [inputTo, setInputTo] = useState();
    const openModal = () => {
        setIsOpen(true);
    }
    
    const closeModal = () => {
        setIsOpen(false);
    }
    const openModalUpdate = () => {
        setIsOpenUpdate(true);
    }
    const closeModalUpdate = () => {
        setIsOpenUpdate(false);
    }
    const deleteRow = async (index, e) => {
        let data = doctordata;
        data.splice(index, 1);

        setdoctorData([...data]);
    };
    const addRow = async e => {
        let obj = {
            id: Math.random(),
            doctorname: inputFrom,
            email: inputTo
        };
       let data = doctordata;
        data.push(obj);
        setdoctorData([...data]);
        console.log(data, "adddata")
    };
    return (
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
                                                    Liste des médecins
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6">
                                        <div className="validation-check-savoir">
                                            <h2 className="fs-5 py-2 text-left">
                                                    <button class="btn" onClick={openModal} style={{ backgroundColor: "rgb(34, 3, 130)", color: "white" }}>Ajouter un médecin</button>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12">
                                            <div className="table-patients-valider">
                                                <div className="table-responsive">
                                                    <table className="table  table-striped table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Doctor Name</th>
                                                                <th>Email</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {
                                                                doctordata.map((items) => (
                                                                    <tr key={items.id}>
                                                                        <td>
                                                                            <img
                                                                                className="rounded-circle mx-2"
                                                                                width={32}
                                                                                height={32}
                                                                                src={pic}
                                                                                alt=""
                                                                            />{" "}{items.doctorname}</td>
                                                                        <td>{items.email}</td>

                                                                        <td><td><div className="d-flex align-items-center">

                                                                            {" "}
                                                                            <button class="btn" style={{ backgroundColor: "#f5222d", color: "white", float: "right" }} onClick={deleteRow}>Supprime</button>

                                                                            &nbsp; &nbsp;
                                                                            {" "}
                                                                            <button class="btn" style={{ backgroundColor: "#5cdbd3", color: "white", float: "right" }} onClick={openModalUpdate} >Éditer</button>



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
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <FontAwesomeIcon icon={faXmark} style={{ float: "right" }} onClick={closeModal} />
                <br />
                <form
                >
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Doctor Name</label>
                        <input type="text" class="form-control" id="doctor" aria-describedby="emailHelp"
                            value={inputFrom}
                            onChange={e => setInputFrom(e.target.value)}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={inputTo}
                            onChange={e => setInputTo(e.target.value)}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={e => addRow(e)}>Add</button>
                </form>
                <button className='btn' style={{ backgroundColor: "green", float: "right" }} onClick={closeModal}>close</button>

            </Modal>
            <Modal
                isOpen={modalIsOpenupdate}
                onRequestClose={closeModalUpdate}
                style={customStyles}
                contentLabel="Example Modal"
            >
                 <FontAwesomeIcon icon={faXmark} style={{ float: "right" }} onClick={closeModalUpdate} />
                <br />
                <form
                >
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Doctor Name</label>
                        <input type="text" class="form-control" id="doctor" 
                         
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" 
                      
                        />
                    </div>
                    <button type="submit" class="btn btn-primary" >Update</button>
                </form>
            </Modal>

        </div>
    )
}


export default DoctorlistDetails