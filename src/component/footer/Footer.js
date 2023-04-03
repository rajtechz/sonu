import { Box } from '@mantine/core'
import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io'
import "./footer.css"
export default function Footer() {
    return (
        <>
            {/* <section id='footer'>

                <div className='footer-section'>
                    <div className='container'>
                        <div className='footer-content'>
                            <Box>
                                <div className='social-media'>
                                    <a href=""><AiFillInstagram className='media-links' /></a>
                                    <a href=""><FaTwitter className='media-links' /></a>
                                    <a href=""><IoLogoLinkedin className='media-links' /></a>
                                </div>
                            </Box>
                        </div>
                    </div>
                </div>
            </section> */}

            <section>

                <footer className='ftr'>
                    <p>Copyright © 2023</p>
                </footer>
            </section>
        </>
    )
}
