import React from 'react';
import "../style/SignUp.css"



const SignUpForm = () => {

    return (
        <>
        <div className='sign_upForm'>
            <form className="shadow-sm">
                <div classname="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr></hr>

                    <label for="name"><b>Name</b></label>
                    <input type="name" placeholder="Enter name" name="name"  />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw"  />

                    <label for="email"><b>Email</b></label>
                    <input type="email" placeholder="Enter email" name="email"  />

                    <label>
                        <input type="checkbox" checked="checked" name="remember" style={{marginBottom:"15px"}} /> Remember me
                    </label>
                    <div classname="clearfix">
                      
                        <button type="submit" classname="signupbtn">Sign Up</button>
                    </div>
                </div>
            </form>
            </div>
        </>
    )
}

export default SignUpForm
