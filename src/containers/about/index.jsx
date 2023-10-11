import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from "react-simple-animate";
import { DiJava, DiReact } from 'react-icons/di'
import { FaBootstrap, FaDatabase } from 'react-icons/fa'
import './styles.scss';

const JobSummary1 = "Hello! I'm a passionate MERN stack developer with a strong foundation in HTML, CSS, JavaScript, React.js, Bootstrap, Mongoose for streamlined database operations,Node js and Java . My journey into the world of full-stack development has been a thrilling adventure, and I'm excited to share my skills with you.";

const JobSummary ="At the front end, I specialize in crafting intuitive and visually appealing user interfaces. I'm proficient in HTML5 and CSS3, ensuring that websites I develop are not only functional but also aesthetically pleasing. My deep understanding of JavaScript allows me to build interactive and dynamic web applications, and I'm well-versed in modern frameworks like React.js, which enables me to create seamless user experiences. I utilize Bootstrap to expedite the development process, ensuring responsive designs that look great on all devices.";

const JobSummary2 = "On the back end, I have a strong command of Java, which allows me to create robust server-side applications. My database expertise spans SQL, ensuring efficient data storage and retrieval. I excel at designing RESTful APIs that enable smooth communication between the front and back end, providing users with a seamless experience. For Node.js-based applications, I rely on Express.js to build scalable and efficient server-side solutions. ";

const personaDetails = [
    {
        label: "Name",
        value: "Ashrumochana Jena",
    },
    {
        label: "Age",
        value: "21",
    },
    {
        label: "Address",
        value: "India",
    },
    {
        label: "Email",
        value: "deepakjena918@gmail.com"
    },
    {
        label: "Contact No",
        value: "+91 7682874554"
    }
]


const About = () => {
    return (
        <section id='about' className='about'>
            <PageHeaderContent
                headerText='My About'
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className='about__content'>
                <div className='about__content__personalWrapper'>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}

                    >
                         <p>{JobSummary1}</p>
                        <h3>Front End Developer</h3>
                        <p>{JobSummary}</p>
                        <h3>Back End Developer</h3>
                        <p>{JobSummary2}</p>
                        
                    </Animate>


                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >

                        <h3 className='personalInformationHeaderText'>Personal Information</h3>
                        <ul>
                            {
                                personaDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className='titel'>{item.label}</span>
                                        <span className='value'>{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className='about__content__servicesWrapper'>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >


                        <div className='about__content__servicesWrapper__innerContent'>
                            <div>
                                <FaBootstrap size={60} color='var(--yellow-theme-main-color)' />
                            </div>
                            <div>
                                <DiJava size={60} color='var(--yellow-theme-main-color)' />
                            </div>
                            <div>
                                <FaDatabase size={60} color='var(--yellow-theme-main-color)' />
                            </div>
                            <div>
                                <DiReact size={60} color='var(--yellow-theme-main-color)' />
                            </div>
                        </div>
                    </Animate>
                </div>

            </div>
        </section>
    )
}
export default About;