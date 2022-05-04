import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password)
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='mt-3'>
            <h2 className='text-center'>Please Register</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name="name" id="" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="email" name="email" id="" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="password" name="password" id="" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-center'>Already registered? <Link to='/login' className='text-decoration-none'>Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;