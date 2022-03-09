import React, { Component } from 'react'
import '../App.css'

export default class Signup extends Component {
    render() {
        return (
            <div style={{}}>
                <div style={{ paddingTop: '11%' }}>
                    <form>
                        <label style={{ marginBottom: '2%', textAlign: 'center', display:'block', fontWeight:'bold', fontSize:'5.5vh' }}>Sign Up</label>

                        <div className='form-group'>
                            <input required style={{ width: '28%' }} type="text" className='form-control center-block' id='username' placeholder='Enater your name' />
                        </div>
                        <div className='form-group'>
                            <input style={{ width: '28%' }} type="email" className='form-control center-block' id='useremail' placeholder='Enter email address' />
                        </div>
                        <div className='form-group'>
                            <input required style={{ width: '28%' }} type="password" className='form-control center-block' id='userpassword' placeholder='Enter Password' />
                        </div>
                        <button style={{ width: '28%' }} className='btn btn-primary center-block'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
