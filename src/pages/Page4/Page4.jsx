import React from 'react'
import Accordion from '../../components/accardion/Accordion'
import Stick from '../../components/title/Stick'
import Facts from '../../components/facts/Facts'
import rasm from '../././../components/facts/facts1.png'
import rasm2 from '../././../components/facts/facts2.png'
import rasm3 from '../././../components/facts/facts3.png'
import Title from '../../components/title/Title'
import '../Page4/p.scss'
import AmityInputs from '../../components/InputsButtons/AmityInputs'

const Page4 = () => {
    return (
        <>

            <Title titleUp="Home  ::  PAGE  ::  Current page" title="Apply Today" />
            <Stick color="red" />

            <Accordion type={"forApply"} title={"Enquirer Details"} content={<AmityInputs label="Title*" type="text" placeholder={"Select options"}/>} 
            />
            
            <Accordion type={"forApply"} title={"Applicants"} />
            <Accordion type={"forApply"} title={"Contacts"} />


            <div className='facts'>
                <Facts theme={"orange"} background={rasm} header={"83%"} subheader={"of recent graduates started new jobs"} stickColor={"#002B49"} />
                <Facts theme={"dark"} background={rasm2} header={"83%"} subheader={"of recent graduates started new jobs"} stickColor={"#FFC600"} />
                <Facts theme={"orange"} background={rasm3} header={"83%"} subheader={"of recent graduates started new jobs"} stickColor={"#002B49"} />
            </div>
        </>
    )
}

export default Page4