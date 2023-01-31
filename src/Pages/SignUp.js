import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';



const SignUp = () => {

    const handleSubmit = event =>{
        event.preventDefault();
        let userName = event.target.userName.value;
        let userEmail = event.target.userEmail.value;
        let userPassword = event.target.userPassword.value;

        event.target.reset();
    }


    return (
        <div className='w-25 mx-auto'>
            <h3 className='text-warning'>Please Register</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="text" placeholder="Enter User Name" name='userName' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='userEmail'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='userPassword' />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p>Already have an account? <Link to='/Login' className='text-primary hover:link-hover' >Login</Link></p> 
            </Form>
        </div>
    );
};

export default SignUp;