import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import romo from '../../Image/romofyilogo.png'
import bag from '../../Image/shoppingbag.png'
import XIcon from '@mui/icons-material/X';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Header() {

    return (

        <div className='head2'>
            <div>
                <Link to='/' > <img src={romo} alt=''></img> </Link>
            </div>
            <ul >            
                    <li>
                        <a
                            href="https://www.facebook.com/login"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FacebookOutlinedIcon fontSize="small" />
                        </a>
                    </li>

                  
                    <li>
                        <a
                            href="https://twitter.com/login"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <XIcon fontSize="small" />
                        </a>
                    </li>

                  
                    <li>
                        <a
                            href="https://www.linkedin.com/login"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon fontSize="small" />
                        </a>
                    </li>

                  
                    <li>
                        <a
                            href="https://www.instagram.com/accounts/login/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InstagramIcon fontSize="small" />
                        </a>
                    </li>
            </ul>

        </div>


    )
}







