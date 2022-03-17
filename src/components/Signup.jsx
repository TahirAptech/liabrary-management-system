import React, { useState } from 'react';
import '../App.css';
import Loader from '../components/Loader';
import UserAuthService from '../services/userAuthService';

export default function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const Signup = (e) => {
        e.preventDefault();
        setLoading(true);
        const response = UserAuthService.signUp(email, password);
        alert(email, password)
        setLoading(false);
        alert(response.message);
    }

    return (
        <div>
            <div style={{ paddingTop: '11%' }}>
                <form onSubmit={Signup}>
                    <label style={{ marginBottom: '2%', textAlign: 'center', display: 'block', fontWeight: 'bold', fontSize: '5.5vh' }}>Sign Up</label>

                    <div className='form-group'>
                        <input value={name} onChange={e => setName(e.target.value)} required style={{ width: '28%' }} type="text" className='form-control center-block' id='username' placeholder='Enater your name' />
                    </div>
                    <div className='form-group'>
                        <input value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '28%' }} type="email" className='form-control center-block' id='useremail' placeholder='Enter email address' />
                    </div>
                    <div className='form-group'>
                        <input value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '28%' }} type="password" className='form-control center-block' id='userpassword' placeholder='Enter Password' />
                    </div>
                    {
                        loading ? <Loader/> : 
                         <button style={{ width: '28%' }} className='btn btn-primary center-block'>Submit</button>
                    }
                </form>
            </div>
        </div>
    );
}
