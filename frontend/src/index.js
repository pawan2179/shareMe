import React from 'react'
import ReactDOM from 'react-dom'

import {App} from './App'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
        <BrowserRouter><App /></BrowserRouter>
    </GoogleOAuthProvider>
    
);