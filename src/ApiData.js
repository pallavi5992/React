import { faUsers, faSignOut,faCog ,faVideo,faComments,faThLarge,faUserMd,	faEdit} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const doctor_profile =
{
  "id": "1",
  "firstname": "sam",
  "lastname": "parkar",
  "Specialization": "abc",
  "Email": "sam@yupmail.com",
  "Telephone": "123456",
  "Address": "noida"
};

export const Patient_Information =
{
  "id": "1",
  "Patient": "Andrew Anderson (66 ans)",
  "Abonnement": "Covid 19",
  "Date de debut": "Date de debut",
  "Date de fin": "Date de fin",
  "Informations": "En attente de validation",
  "Actions": ""

}
export const patient_List =
  [
    {
      "id": 1,
      "patient": "Andrew Anderson (66 ans)",
      "Abonnement": "covid19",
      "Datededebut": "4/24/2021",
      "Datedefin": "2/24/2022",
      "information": "En enter de validation"
    },
    {
      "id": 2,
      "patient": "Leanne  Graham (66ans)",
      "Abonnement": "covid19",
      "Datededebut": "4/24/2021",
      "Datedefin": "2/24/2022",
      "information": "En enter de validation"

    },
    {
      "id": 3,
      "patient": "Leanne Graham (66ans)",
      "Abonnement": "covid19",
      "Datededebut": "4/24/2021",
      "Datedefin": "2/24/2022",
      "information": "En enter de validation"
    },
    {
      "id": 4,
      "patient": "Leanne Graham (66ans)",
      "Abonnement": "covid19",
      "Datededebut": "4/24/2021",
      "Datedefin": "2/24/2022",
      "information": "En enter de validation"

    },
    {
      "id": 5,
      "patient": "Leanne Graham (66ans)",
      "Abonnement": "covid19",
      "Datededebut": "4/24/2021",
      "Datedefin": "2/24/2022",
      "information": "En enter de validation"

    },
    {
      "id": 6,
      "patient": "Leanne Graham (66ans)",
      "Abonnement": "covid19",
      "Datededebut": "4/24/2021",
      "Datedefin": "2/24/2022",
      "information": "En enter de validation"

    },
    {
      "id": 7,
      "patient": "Leanne Graham (66ans)",
      "Abonnement": "covid19",
      "Datededebut": "4/24/2021",
      "Datedefin": "2/24/2022",
      "information": "En enter de validation"

    }
  ]
  export const doctor_list = [
    {
      id:1,
      doctorname:"Dr. Ali",
      email:"abcd@gmail.com"
    },
    {
      id:2,
      doctorname:"Dr. Amrendra",
      email:"abcd@gmail.com"
    },
  ]
  export const sidebar_details =
  [
    {
      id:1,
      name:"Dashboard",
      url:"/dashboard",
      status:"active",
      icon:<FontAwesomeIcon icon = {faThLarge} />
    },
    {
      id:2,
      name:"Doctor",
      url:"/doctor",
      status:"",
      icon:<FontAwesomeIcon icon ={faUserMd}  />

    },
    {
      id:3,
      name:"PatientDetails",
      url:"/PatientsScreen",
      status:"",
      icon:<FontAwesomeIcon icon ={faUsers} />

    },

    {
      id:6,
      name:"Chat",
      url:"/dashboard",
      status:"",
      icon:<FontAwesomeIcon icon = {faComments} />
    },
    {
      id:7,
      name:"Video",
      url:"/dashboard",
      status:"",
      icon:<FontAwesomeIcon icon = {faVideo} />
    },
    {
      id:8,
      name:"Setting",
      url:"/dashboard",
      status:"",
      icon:<FontAwesomeIcon icon = {faCog} />
    },
    {
      id:9,
      url:"/",
      name:"Logout",
      status:"",
      icon:<FontAwesomeIcon icon = {faSignOut} />
      
    }
  ]
  export const Validation_Check =[
    {
      name:"Samantha1",
      age:"62 ans",
      Abonnement:"covid1"

    },
    {
      name:"Samantha2",
      age:"52 ans",
      Abonnement:"covid"

    }
  ]
  export const action_Requise =[
    {
      name:"Samantha1",
      age:"62 ans",
      Abonnement:"covid1",
      Oxygene:"Oxygene"
    },
    {
      name:"Samantha2",
      age:"52 ans",
      Abonnement:"covid1",
      Oxygene:"Oxygene"

    }
  ]