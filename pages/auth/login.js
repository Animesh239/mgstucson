// login page

import React from 'react';
import { LoginForm } from '@/components/auth/LoginForm';
import Head from 'next/head';

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