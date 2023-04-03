import React from 'react'
import "./service.css"
import { motion } from 'framer-motion';
import portfolio1 from "../../assets/portfolio1.jpg"
import portfolio2 from "../../assets/portfolio2.jpg"
import portfolio3 from "../../assets/portfolio3.jpg"
import portfolio4 from "../../assets/portfolio4.jpg"
import portfolio5 from "../../assets/portfolio5.png"
import portfolio6 from "../../assets/portfolio4.jpg"
import { Box, Grid } from '@mantine/core';

export default function Service() {
  return (
    <>
      <section id='service'>
        <div className="container container-service">
          <Grid m={20}>
            <Grid.Col md={12} lg={12} sm={12}>

              <motion.div
                animate={{
                  rotate: 360,
                  y: -20
                }}
              >
                <h3 style={{ color: "red" }}>My</h3>
                <h2>Services</h2>

              </motion.div>
            </Grid.Col>
            <Grid.Col md={12} lg={12} sm={12}>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, animi explicabo sapiente est architecto obcaecati nobis repudiandae, quisquam vero sunt ut, tempore earum autem eligendi nam officia. Nemo quod reprehenderit ratione vel recusandae natus quasi voluptatum doloremque? Doloribus, mollitia. Repudiandae eos autem optio inventore ullam, eveniet eius atque quae nulla, vero consequatur itaque sunt sapiente at earum doloribus iure labore explicabo molestias cumque eaque assumenda! Quaerat rem rerum, nobis adipisci odio repellat tenetur in fugiat repellendus assumenda! Veritatis voluptatum laborum nemo tempora incidunt iure enim rerum. Perferendis, deleniti labore iusto ipsam, repudiandae assumenda ex, soluta deserunt at modi dolorem architecto.</p>
            </Grid.Col>

          </Grid>


          <Grid m={20} className="services" >
            <Grid.Col md={3} lg={3} sm={6} className="services-component">
              <img src={portfolio1} alt="" />
              <h3 style={{ marginBottom: "20px" }}> This is the work we done</h3>
              <motion.a className='btn' ><span> Demo</span></motion.a>
            </Grid.Col>
            <Grid.Col md={3} lg={3} sm={6} className="services-component">
              <img src={portfolio2} alt="" />
              <h3 style={{ marginBottom: "20px" }}> This is the work we done</h3>
              <motion.a className='btn' ><span> Demo</span></motion.a>
            </Grid.Col>
            <Grid.Col md={3} lg={3} sm={6} className="services-component">
              <img src={portfolio3} alt="" />
              <h3 style={{ marginBottom: "20px" }}> This is the work we done</h3>
              <motion.a className='btn' ><span> Demo</span></motion.a>
            </Grid.Col>
            <Grid.Col md={3} lg={3} sm={6} className="services-component">
              <img src={portfolio4} alt="" />
              <h3 style={{ marginBottom: "20px" }}> This is the work we done</h3>
              <motion.a className='btn' ><span> Demo</span></motion.a>
            </Grid.Col>
            <Grid.Col md={3} lg={3} sm={6} className="services-component">
              <img src={portfolio5} alt="" />
              <h3 style={{ marginBottom: "20px" }}> This is the work we done</h3>
              <motion.a className='btn' ><span> Demo</span></motion.a>
            </Grid.Col>
            <Grid.Col md={3} lg={3} sm={6} className="services-component">
              <img src={portfolio6} alt="" />
              <h3 style={{ marginBottom: "20px" }}> This is the work we done</h3>
              <motion.a className='btn' ><span> Demo</span></motion.a>
            </Grid.Col>

          </Grid>
        </div>

      </section>
    </>
  )
}
