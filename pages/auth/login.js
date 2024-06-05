// login page

import React from 'react';
import Head from 'next/head';
import LoginForm from '@/sections/Login';

const Login = () => {

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <LoginForm />
        </>
    );
}

export default Login;