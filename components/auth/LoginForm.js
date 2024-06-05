// loginForm

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Title } from '@/components/common/Title';
// import { Input } from '@/components/common/Input';
// import { Button } from '@/components/common/Button';

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
        staggerChildren: 0.3,
        },
    },
    };

const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
};

export const LoginForm = () => {
    
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(email, password);
        };

    return (
        <>
            <motion.section
                className='agency bg-top'
                initial='hidden'
                animate='visible'
                variants={containerVariants}
            >
                <div className='container'>
                    <motion.div className='heading-title' variants={itemVariants}>
                        <Title title='Login' className='title-bg' />
                    </motion.div>
                    <motion.div className='py-1' variants={containerVariants}>
                        <form onSubmit={handleSubmit}>
                            <input
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type='submit' title='Submit' />
                        </form>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
}

export default LoginForm;