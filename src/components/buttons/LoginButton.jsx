"use client";
import React from 'react';

const LoginButton = () => {
    return (
        <button className="btn btn-primary" onClick={() => signIn() }>Login</button>
    );
};

export default LoginButton;