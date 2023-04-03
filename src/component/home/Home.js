import React from 'react'
import "./home.css"
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
// import p3 from "../../assets/p3.png"
import p5 from "../../assets/p5.png"
import p8 from "../../assets/p8.png"
import p9 from "../../assets/p9.png"
import me from "../../assets/me.png"
import { AiFillInstagram } from "react-icons/ai"
import { FaTwitter } from "react-icons/fa"
import { IoLogoLinkedin } from "react-icons/io"
import { Center, Grid } from '@mantine/core';
export default function Home() {
    return (
        <>
            <section id="/">
                <div className='container container-home'>
                    <Grid p={20}>
                        <Grid.Col md={12} lg={12} sm={12}>
                            <motion.div
                                animate={{
                                    rotate: 360,
                                    y: -20
                                }}
                            >
                                <h2>Hey I'am </h2>
                                <h1>sonu</h1>
                                <h3 style={{ color: "red" }}>Web developer</h3>
                                <h3><Typewriter
                                    options={{
                                        strings: ['Web desiner', 'React js', 'Node js', 'Bootstrap', 'Mongo db', 'HTML', 'CSS', 'Java script',],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></h3>
                            </motion.div>
                        </Grid.Col>

                        <Grid.Col md={12} lg={12} sm={12}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime optio, aspernatur saepe distinctio vel quaerat ex ipsum ea, in ut at voluptates doloribus asperiores? Nisi iste ullam enim vero magni beatae itaque ex consequuntur veritatis aliquam quidem officiis, numquam nostrum maiores sit, ipsam obcaecati cupiditate! Pariatur, praesentium corrupti. Eligendi, ratione autem molestiae voluptate dolore consequatur veniam tempore rem corporis reiciendis ab quia enim sunt facere vero nemo soluta porro blanditiis tenetur error. Impedit eligendi inventore repellendus, quisquam optio, accusamus harum mollitia suscipit cupiditate velit nemo maiores saepe dolore rem nostrum illum atque, animi modi! Asperiores blanditiis qui nostrum accusamus commodi!</p>

                        </Grid.Col>

                        <Grid.Col md={6} mt={150}>
                            <div className='socila-media'>
                                <Center>

                                    <a href=""><AiFillInstagram className='media-links' /></a>
                                    <a href=""><FaTwitter className='media-links' /></a>
                                    <a href=""><IoLogoLinkedin className='media-links' /></a>
                                </Center>
                                <Center>

                                    <motion.a href="" className='btn1' ><span> Download cv</span></motion.a>
                                    <motion.a href="" className='btn2' ><span>Email</span></motion.a>
                                </Center>
                            </div>
                        </Grid.Col>
                        <Grid.Col md={6} mt={50} >
                            <div className='profile-image'>
                                <img src={p8} alt="" className='image-me' />
                            </div>
                        </Grid.Col>



                    </Grid>




                    {/* <div className='profile-section'>
                        <div className='first-section'>
                            <div className='social-media'>
                                <a href=""><AiFillInstagram className='media-links' /></a>
                                <a href=""><FaTwitter className='media-links' /></a>
                                <a href=""><IoLogoLinkedin className='media-links' /></a>
                            </div>
                            <motion.a href="" className='btn1' ><span> Download cv</span></motion.a>
                            <motion.a href="" className='btn2' ><span>Email</span></motion.a>
                        </div>
                        <div className='second-section'>
                            <img src={p8} alt="" className='image-me' />
                        </div>
                    </div> */}
                </div>
            </section>

        </>
    )
}
