
import { RiUserHeartFill } from "react-icons/Ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { useState, useEffect, useContext } from "react";

import Layout from "../../components/Layout";
//import AuthContext from "../../context/AuthContext";
import styles from "../../styles/AuthForm.module.css";
//import { useRouter } from "next/router";
//import { API_URL } from "../../config";
//import { parseCookie } from "../../helpers";
export default function RegisterDonor({token}) {
    /* strapi version
    const { user, logout } = useContext(AuthContext);
    const [values, setValues] = useState({
     
      role:"3",
      BloodType: "",
      PhoneNumber:"",
      
    });
    
    const router = useRouter();
  const handleInputChange = (e) => {
   
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    //Some Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      toast.error("Please fill in all the fields");
      //console.log("Please fill in all the fields");
      return;
    }
    if(confirm("Are you sure you want to register as a blood donor"))
    {
    const res = await fetch(`${API_URL}/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("You are not authorized");
        return;
      }
      toast.error("Something went wrong");
    } else {
      const evt = await res.json();
      alert(
        "Congratulations,you have registered as a Blood Donor.You might be recieving requests any time soon."
      );
      router.push(`/`);
    }
    }
    else{
      return;
    }
  };*/




  
  return (
    <Layout title="Register Page">
      <div className={styles.auth}>
        <h1>
          <RiUserHeartFill />
          &nbsp;Donor Registration
        </h1>
        <ToastContainer />

        <form  >
        <div>
            <label htmlFor="BloodType">Blood Type</label>
            <select
              className="blood"
              type="Text"
              id="BloodType"
              name="BloodType"
              //value={values.BloodType}
             // onChange={handleInputChange}
            >
              <option></option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div>
            <label htmlFor="Phone">Phone Number</label>
            <input
              type="tel"
              id="PhoneNumber"
              name="PhoneNumber"
              pattern="[0-9]{10}"
              //value={values.PhoneNumber}
              required
             // onChange={handleInputChange}
              
               
              
            ></input>
          </div>
          <input type="submit" value="Join the Donor Club" className="btn"></input>
      </form>
       
        
      </div>
    </Layout>
  );
}
/*
export async function getServerSideProps({ req }) {
  const { token } = parseCookie(req);

  return {
    props: {
     
      token,
    },
  };
}
*/