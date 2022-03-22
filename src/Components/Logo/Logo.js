import React from 'react'
import './Logo.css'
import { useHistory } from 'react-router-dom'

function Logo() {
    
    return (
        <div id="logo" class="logo">
            <a href="/" class="logo d-flex align-items-center">
                    <img src="../../../Image/logo .png" alt="" />
                    <span  >SMS APP</span>
            </a>
        </div>
    )
}

export default Logo
