import React, { useState, useRef } from 'react';
import './form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

function Form() {
    const [fname, setfname] = useState("none");
    const [sname, setsname] = useState("none");
    const [email, setmail] = useState("none");
    const [ongoingmail, setongoing] = useState("none");
    const [passone, setone] = useState("none");
    const [passtwo, settwo] = useState("none");
    const [passerror, seterror] = useState("none");
    const [confirmerror, setcerror] = useState("none");
    const [fborder, setfborder] = useState("1px solid black");
    const [sborder, setsborder] = useState("1px solid black");
    const [mborder, setmborder] = useState("1px solid black");
    const [poborder, setpoborder] = useState("1px solid black");
    const [ptborder, setptborder] = useState("1px solid black");
    const[post,setpost] = useState(false);

    const fnameip = useRef(null);
    const snameip = useRef(null);
    const emailip = useRef(null);
    const password = useRef(null);
    const confirm = useRef(null);

    const ValidateEmail = (mail) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        return (false)
    }
    const emailcheck = (e) => {
        setpost(false);
        if (email === "block") {
            if (emailip.current.value !== "") {
                setmail("none");
                setmborder("1px solid black");
            }
        }

        if (ValidateEmail(e.target.value) === false) {
            setongoing("block");
        } else {
            setongoing("none");
        }
    }
    const fnamecheck = () => {
        if (fname === "block") {
            if (fnameip.current.value !== "") {
                setfname("none");
                setfborder("1px solid black");
            }
        }
        setpost(false);
    }

    const snamecheck = () => {
        setpost(false);
        if (sname === "block") {
            if (snameip.current.value !== "") {
                setsname("none");
                setsborder("1px solid black");
            }
        }
    }

    const passonecheck = () => {
        setpost(false);
        if (passone === "block") {
            if (password.current.value !== "") {
                setone("none");
                setpoborder("1px solid black");
            }

        }
        if(passerror === "block"){
            if (password.current.value >= 6) {
                seterror("none");
            }
        }
    }

    const passtwocheck = () => {
        setpost(false);
        if (passtwo === "block") {
            if (confirm.current.value !== "") {
                settwo("none");
                setptborder("1px solid black");
            }
        }
        if (confirmerror === "block") {
            setcerror("none");
        }
    }
    const submit = () => {
        setpost(false);
        if (fnameip.current.value === "") {
            setfname("block");
            setfborder("3px solid red");
        }
        if (snameip.current.value === "") {
            setsname("block");
            setsborder("3px solid red");
        }
        if (emailip.current.value === "") {
            setmail("block");
            setmborder("3px solid red");
        }
        if (password.current.value === "") {
            setone("block");
            setpoborder("3px solid red");
        }
        if (confirm.current.value === "") {
            settwo("block");
            setptborder("3px solid red");
        }
        if ((password.current.value.length <=5 ) && (password.current.value.length !== 0)) {
            seterror("block");
        }
        if ((password.current.value !== confirm.current.value) && (password.current.value !== "" && confirm.current.value !== "")) {
            setcerror("block");
        }
        finalsubmit();
    }
    const finalsubmit = ()=>{
        if (fnameip.current.value !== "" && snameip.current.value !== "" && emailip.current.value !== "" && password.current.value !== "" && confirm.current.value !== "" 
        && password.current.value === confirm.current.value && password.current.value.length>=6){
                setpost(true);
            fnameip.current.value = "";
            snameip.current.value = "";
            emailip.current.value = "";
            password.current.value = "";
            confirm.current.value = "";
        }
        
    }
    return (
        <div>
            <div >
                {(post===true)?<div className="success">{"Congratulations! You have singed Up Successfully."}</div> : ""}
                </div>
            <div className="fulldiv">
                <div className="itemdiv">
                    <div className="inneritemdiv">
                        <div className="topic">
                            First Name
                        </div>
                        <input ref={fnameip} onChange={fnamecheck} style={{ border: fborder }} placeholder="Enter Your First Name" />
                    </div>
                    <div className="error" style={{ display: fname, marginTop: "4px" }}>
                        <FontAwesomeIcon icon={faExclamationCircle} size="lg" style={{ color: "red", marginRight: "2px" }} />
                        {" Please Enter First Name"}
                    </div>
                </div>
                <div className="itemdiv">
                    <div className="inneritemdiv">
                        <div className="topic">
                            Last Name
                        </div>
                        
                        <input ref={snameip} onChange={snamecheck} style={{ border: sborder }} placeholder="Enter Your Last Name" />
                    </div>
                    <div className="error" style={{ display: sname, marginTop: "4px" }}>
                        <FontAwesomeIcon icon={faExclamationCircle} size="lg" style={{ color: "red", marginRight: "2px" }} />
                        {" Please Enter Last Name"}
                    </div>
                </div>

                <div className="itemdiv">
                    <div className="inneritemdiv">
                        <div className="topic">
                            Email
                        </div>
                        <input onChange={emailcheck} ref={emailip} style={{ border: mborder }} placeholder="Enter Your Email Address" />
                    </div>
                    <div className="error" style={{ display: ongoingmail, marginTop: "4px" }}>
                        <FontAwesomeIcon icon={faExclamationTriangle} size="lg" style={{ color: "red", marginRight: "2px" }} />
                        {" Enter valid Email"}
                    </div>
                    <div className="error" style={{ display: email, marginTop: "4px" }}>
                        <FontAwesomeIcon icon={faExclamationCircle} size="lg" style={{ color: "red", marginRight: "2px" }} />
                        {" Please Enter Email"}
                    </div>
                </div>

                <div className="itemdiv">
                    <div className="inneritemdiv">
                        <div className="topic">
                            Password
                        </div>
                        <input ref={password} onChange={passonecheck} style={{ border: poborder }} placeholder="Enter New Passowrd" />
                    </div>
                    <div className="error" style={{ display: passerror, marginTop: "4px" }}>
                        <FontAwesomeIcon icon={faExclamationCircle} size="lg" style={{ color: "red", marginRight: "2px" }} />
                        {" Enter Password Of Atleast Length 6"}
                    </div>
                    <div className="error" style={{ display: passone, marginTop: "4px" }}>
                        <FontAwesomeIcon icon={faExclamationCircle} size="lg" style={{ color: "red", marginRight: "2px" }} />
                        {" Please Enter Password"}
                    </div>
                </div>

                <div className="itemdiv">
                    <div className="inneritemdiv">
                        <div className="topic">
                            Confirm Password
                        </div>
                        <input ref={confirm} onChange={passtwocheck} style={{ border: ptborder }} placeholder="Repeat Entered Password" />
                    </div>
                    <div className="error" style={{ display: confirmerror, marginTop: "4px" }}>
                        <FontAwesomeIcon icon={faExclamationCircle} size="lg" style={{ color: "red", marginRight: "2px" }} />
                        {" Please Enter Confirm password correctly"}
                    </div>
                    <div className="error" style={{ display: passtwo, marginTop: "4px" }}>
                        <FontAwesomeIcon icon={faExclamationCircle} size="lg" style={{ color: "red", marginRight: "2px" }} />
                        {" Please Enter Confirmed Password"}
                    </div>
                </div>
                <div className="itemdiv" onClick={submit}>
                    <button className="submit">Submit and Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Form
