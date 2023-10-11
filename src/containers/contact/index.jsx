// import React from 'react'
// import PageHeaderContent from '../../components/pageHeaderContent';
// import { BsInfoCircleFill } from 'react-icons/bs'
// import { Animate } from "react-simple-animate";
// import './styles.scss';  






// const Contact = () => {
//     return (
//         <section id='contact' className='contact'>
//             <PageHeaderContent
//                 headerText='My Contact'
//                 icon={<BsInfoCircleFill size={40} />}
//             />

//             <div className='contact__content'>
//                 <Animate
//                     play
//                     duration={1}
//                     delay={0}
//                     start={{
//                         transform: "translateX(-200px)"
//                     }}
//                     end={{
//                         transform: "translateX(0px)"
//                     }}
//                 >
//                     <h3 className='contact__content__header-text'>
//                         Let's talk
//                     </h3>

//                 </Animate>

//                 <Animate
//                     play
//                     duration={1}
//                     delay={0}
//                     start={{
//                         transform: "translateX(200px)"
//                     }}
//                     end={{
//                         transform: "translateX(0px)"
//                     }}
//                 >
//                     <div className='contact__content__form'>
//                         <div className='contact__content__form__controlswrapper'>
//                             <div >
//                                 <input name='name' className='inputName' type={'text'} required/>
//                                 <label htmlFor='name' className='nameLabel'>Name</label>
//                             </div>
//                             <div >
//                                 <input name='email' className='inputEmail' type={'emaill'} required/>
//                                 <label htmlFor='email' className='emailLabel'>Email Id</label>
//                             </div>
//                             <div >
//                                 <input name='phone' className='inputPhone' type={'phone'} required/>
//                                 <label htmlFor='phone' className='phoneLabel'>phone No</label>
//                             </div>
//                             <div >
//                                 <input name='date' className='inputDate' type={'Date'} required/>
//                                 <label htmlFor='email' className='emailLabel'></label>
//                             </div>
//                             <div >
//                                 <textarea name='description' className='inputDescription' type={'text'} rows={'6'} required/>
//                                 <label htmlFor='description' className='descriptionLabel'>Description</label>
//                             </div>
//                         </div>
//                         <button >Submit</button>
//                     </div>

//                 </Animate>
//             </div>
//         </section>
//     )
// }
// export default Contact;

import React, { useState } from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './styles.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        description: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
    
        if (!formData.name) {
            newErrors.name = (
                <span style={{ color: 'red' }}>Name is required</span>
            );
        }
    
        if (!formData.email) {
            newErrors.email = (
                <span style={{ color: 'red' }}>Email is required</span>
            );
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = (
                <span style={{ color: 'red' }}>Email is invalid</span>
            );
        }
    
        if (!formData.phone) {
            newErrors.phone = (
                <span style={{ color: 'red' }}>Phone is required</span>
            );
        }
    
        setErrors(newErrors);
    
        return Object.keys(newErrors).length === 0;
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <section id="contact" className="contact">
            <PageHeaderContent headerText="My Contact" icon={<BsInfoCircleFill size={40} />} />

            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: 'translateX(-200px)',
                    }}
                    end={{
                        transform: 'translateX(0px)',
                    }}
                >
                    <h3 className="contact__content__header-text">Let's talk</h3>
                </Animate>

                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: 'translateX(200px)',
                    }}
                    end={{
                        transform: 'translateX(0px)',
                    }}
                >
                    <div className="contact__content__form">
                        <div className="contact__content__form__controlswrapper">
                            <div>
                                <input
                                    name="name"
                                    className="inputName"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="name" className="nameLabel">
                                    Name
                                </label>
                                {errors.name && (
                                    <span className="errorText"> {errors.name}</span>
                                )}
                            </div>
                            <div>
                                <input
                                    name="email"
                                    className="inputEmail"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="email" className="emailLabel">
                                    Email Id
                                </label>
                                {errors.email && (
                                    <span className="errorText"> {errors.email}</span>
                                )}
                            </div>
                            <div>
                                <input
                                    name="phone"
                                    className="inputPhone"
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="phone" className="phoneLabel">
                                    Phone No
                                </label>
                                {errors.phone && (
                                    <span className="errorText"> {errors.phone}</span>
                                )}
                            </div>
                            <div>
                                <input
                                    name="description"
                                    className="inputDate"
                                    type="Date"
                                    required
                                />
                                <label htmlFor="description" className="emailLabel"></label>
                            </div>
                            <div>
                                <textarea
                                    name="description"
                                    className="inputDescription"
                                    type="text"
                                    rows="6"
                                    required
                                    value={formData.description}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="description" className="descriptionLabel">
                                    Description
                                </label>
                            </div>
                        </div>
                        <button type="submit" onClick={validateForm}>
                            Submit
                        </button>
                    </div>
                </Animate>
            </div>
        </section>
    );
};

export default Contact;
