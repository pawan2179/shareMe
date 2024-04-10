import React, { useEffect } from 'react';
import {GoogleLogin} from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logo.png';
import { client } from '../client'
import logoWhite from '../assets/logowhite.png'
import { jwtDecode } from 'jwt-decode'

export const Login = () => {
    const navigate = useNavigate();
    const responseGoogle = (response) => {
        console.log('responsegoogle', jwtDecode(response.credential));
        localStorage.setItem('user', JSON.stringify(response.credential));
        const { given_name, picture, sub} = jwtDecode(response.credential);

        const doc = {
            _id: sub,
            _type: 'user',
            userName: given_name,
            image: picture
        }

        client.createIfNotExists(doc)
            .then(() => {
                navigate('/', {replace: true})
            })
    }

    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className='relative w-full h-full'>
                <video
                    src={ shareVideo }
                    type='video/mp4'
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className='w-full h-full object-cover'
                />
                <div className='absolute flex flex-col justify-center items-center top-0 left-0
                right-0 bottom-0 bg-blackOverlay'>
                    <div className='p-5'>
                        <img src={logoWhite} width='130px' alt='logo'/>
                    </div>
                    <div className='shadow-2xl' id='sign-in-button'>
                        {   <GoogleLogin
                                onSuccess={responseGoogle}
                                onError={responseGoogle}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}