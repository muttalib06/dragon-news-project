import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Social = () => {
        return (
                <div className='space-y-5'>
                        <h3 className='font-semibold text-gray-500'>Find Us On</h3>
                        <div>
                                <button className='shadow p-3 rounded flex justify-start items-center gap-3 w-full border border-gray-300'><FaFacebook></FaFacebook> Facebook</button>
                                <button className='shadow p-3 rounded flex justify-start items-center gap-3 w-full border border-gray-300'><FaTwitter></FaTwitter> Twitter</button>
                                <button className='shadow p-3 rounded flex justify-start items-center gap-3 w-full border border-gray-300'><FaInstagram></FaInstagram>Instagram</button>
                        </div>
                        
                </div>
        );
};

export default Social;