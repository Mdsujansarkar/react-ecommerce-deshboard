import React, { useState } from "react";
import {useHistory} from "react-router-dom";
function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

  async function signUp(){
        let item = {name,email,password}
       let result = await fetch("http://127.0.0.1:8000/api/register",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
            },
            body:JSON.stringify(item)
        });
       result = await result.json();
       console.warn('result',result)
       localStorage.setItem("user-info", JSON.stringify(result));
       history.push("/add");
        
        
    }
    return (
        <div className="contanier">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <form className="from-control">
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                     
                            <button onClick={signUp} className="btn btn-primary" type="button">Button</button>

               
                    </form>
                </div>
            </div>
            <h1>Register</h1>
        </div>
    )
}
export default Register;