import React from 'react'
import "./contact.css"
import { motion } from 'framer-motion'
import p7 from "../../assets/p7.png"
import { Box, Button, Center, Text, Grid, Textarea, TextInput } from '@mantine/core'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io'
export default function Contact() {
  return (
    <>
      <section id='contact'>
        <div className='container container-contact'>
          <Grid>
            <Grid.Col sm={12} lg={12} md={12}>
              <motion.div animate={{ rotate: 360, y: -20 }}>
                <h3 style={{ color: "red" }}>Contact me</h3>
                <h2>Me </h2>
              </motion.div>

            </Grid.Col>
            <Grid.Col sm={12} lg={12} md={12}>

              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellat debitis impedit rem modi sunt facilis dolor quaerat, esse voluptatem facere tempora unde corporis magnam quod animi, asperiores amet eum cumque sequi veniam nihil error. Nihil quam dicta numquam autem nulla ad suscipit sit in esse adipisci! Esse, ad soluta.</Text>
            </Grid.Col>
          </Grid>


          <Grid mt={100} mb={100}>
            <Grid.Col md={6} lg={6} mt={100}>
              <h3>Contact Form</h3>
              <Box maw={320} mx="auto" >
                <TextInput mt="md" placeholder="Name" />
                <TextInput mt="lg" placeholder="Email" />
                <Textarea mt="lg" placeholder="Your comment" />
                <Box mt="lg">
                  <motion.a className='btn' ><span> Submit</span></motion.a>
                </Box>
              </Box>
            </Grid.Col>

            <Grid.Col md={6} lg={6}  mt={50}  >


              <img src={p7} alt="" />

            </Grid.Col>
          </Grid>
        </div>
      </section>


    </>
  )
}
