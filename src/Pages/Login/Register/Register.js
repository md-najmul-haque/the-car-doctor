import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {

    const [agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log(user);
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked
        console.log(name, email, password)
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')
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

                <Form.Group className="mb-3">
                    <Form.Check onClick={() => setAgree(!agree)} className={`ms-0 ${agree ? '' : 'text-danger'}`} type="checkbox" name="terms" label="Accept The Car Doctor's Trams and Condition?" />
                </Form.Group>
                <Button disabled={!agree} variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-center'>Already registered? <Link to='/login' className='text-decoration-none'>Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;