import React from 'react'
import "./about.css"
import Typewriter from 'typewriter-effect'
import p7 from "../../assets/p7.png"
import p5 from "../../assets/p5.png"
import { IoIosArrowForward } from "react-icons/io"
import { Box, Flex, Grid, List, Text } from '@mantine/core'
export default function About() {
  return (
    <div id='about'>

      <section className='container container-about'>

        <Grid m={20}>
          <Grid.Col md={12} lg={12} sm={12} >
            <Box >
              <h3 style={{ color: "red" }}>Get to Know</h3>
              <h2>About me </h2>
            </Box>
          </Grid.Col>
          <Grid.Col md={12} lg={12} sm={12}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, eaque error. Dolorum tempore ex placeat, obcaecati qui soluta quae cupiditate optio beatae eum. Nostrum quas sunt doloremque ipsa possimus pariatur eum vitae. Officiis iusto fuga quos magni deserunt facere natus aperiam, dolorum sit asperiores fugit in dolore eius voluptate, maxime minus temporibus, ex perferendis laborum non blanditiis. Illo qui nulla, blanditiis nemo tempore soluta! Aliquid corporis aut officia officiis voluptates iste possimus non nisi. Cumque distinctio praesentium molestiae, nesciunt aspernatur voluptatum nulla incidunt in ad nemo id illo eum omnis ab dicta possimus quod nostrum veritatis doloremque sit maiores earum!</p>
          </Grid.Col>
        </Grid>

        <div className="about-section">


          <Grid m={20}>
            <Grid.Col md={6} sm={12} lg={6} >
              <Box mt={-100}>

                <img src={p5} alt="" />
              </Box>

            </Grid.Col>




            <Grid.Col md={6} sm={12} lg={6} >

              <Box mt={50}>

                <h2>UI / UX Designer & Web Developer </h2>


                <Flex mt={20}>
                  <Box>
                    <List className='my-profile'>

                      <List.Item p={10}><IoIosArrowForward style={{ color: "red" }} /><b>Birthday : </b><a >1 May 1995 </a></List.Item>
                      <List.Item p={10}> <IoIosArrowForward style={{ color: "red" }} /><b>Website : </b><a >www.example.com</a></List.Item>
                      <List.Item p={10}>  <IoIosArrowForward style={{ color: "red" }} /><b>Mobile No : </b> <a >9876543210</a></List.Item>
                      <List.Item p={10}> <IoIosArrowForward style={{ color: "red" }} /><b>City : </b> <a >Noida</a>u</List.Item>
                    </List>

                  </Box>
                  <Box ml={150} >

                    <List className='my-profile'>
                      <List.Item p={10}><IoIosArrowForward style={{ color: "red" }} /><b>Age : </b><a >23</a></List.Item>
                      <List.Item p={10}><IoIosArrowForward style={{ color: "red" }} /><b>Degree : </b><a >Diploma</a></List.Item>
                      <List.Item p={10}><IoIosArrowForward style={{ color: "red" }} /><b>Email : </b><a >hiitechz07@gmail.com</a></List.Item>
                      <List.Item p={10}><IoIosArrowForward style={{ color: "red" }} /><b>Freelancer : </b><a >Available</a></List.Item>
                    </List>
                  </Box>


                </Flex>
                <Text align='start' mt={20}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus numquam cumque reprehenderit unde beatae amet rem porro dignissimos itaque reiciendis repudiandae, ad a, eius aperiam quis consequatur ipsa cum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis tempora facilis voluptas, temporibus ex, nulla natus mollitia autem harum minima ullam earum veniam, error iste a aliquid numquam dicta sed quia excepturi obcaecati! Consequuntur quod aspernatur, nemo labore voluptas repudiandae iure voluptatibus autem sequi minus at error soluta quos vel hic blanditiis in a eius earum! Eveniet quidem dicta mollitia debitis. Mollitia, saepe esse natus officiis voluptatem sequi, nostrum commodi ducimus alias nesciunt quo nobis ex nam reprehenderit odio optio aut pariatur sed adipisci. Odit culpa sit vitae aspernatur voluptate minus quia veniam corporis, nulla ut labore ducimus dolores nesciunt?</Text>
              </Box>

            </Grid.Col>
          </Grid>



        </div>

      </section>

    </div>
  )
}
