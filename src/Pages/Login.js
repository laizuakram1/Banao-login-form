import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-25 mx-auto'>
            <h3 className='text-warning'>Please Login</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="text" placeholder="Enter User Name" name='user-name' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='user-password' />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>New to Banao.com? <Link to='/SignUp' className='text-primary hover:link-hover' >Register</Link></p>
            </Form>
        </div>
    );
};

export default Login;