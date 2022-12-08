import React from "react";
import Accordion from "../../components/accardion/Accordion";
import Stick from "../../components/title/Stick";
import Facts from "../../components/facts/Facts";
import rasm from "../../components/facts/facts1.png";
import rasm2 from "../../components/facts/facts2.png";
import rasm3 from "../../components/facts/facts3.png";
import Title from "../../components/title/Title";
import "./page4.scss";
import AmityInputs from "../../components/InputsButtons/AmityInputs";
import Button from "../../components/InputsButtons/Button";
import Select from "../../components/InputsButtons/Select";

const Page4 = () => {
    return (
        <div className="container">
            <Title titleUp={
                <span>
                    <a href='#'>Home</a> :: <a href='#'>Page</a> :: <a href='#'>Current Page</a>
                </span>} />
            <Title title="Apply Today" />

            <div className="g">
                <Stick color="red" />
            </div>

            <h2 className="h">Application Form</h2>

            <Accordion
                type={"forApply"}
                title={"Enquirer Details"}
                content={
                    <div className="b">
                        <Select label="Title*" salom />
                        <AmityInputs label="Forename*" type="text" placeholder="Forename" />
                        <AmityInputs
                            label="Middle Names"
                            type="text"
                            placeholder="Middle Names"
                        />
                        <AmityInputs label="Surname*" type="text" placeholder="Surname" />
                        <AmityInputs
                            label="E-mail Address*"
                            type="email"
                            placeholder="E-mail Address"
                        />
                        <AmityInputs
                            label="Mobile Number*"
                            type="text"
                            placeholder="+ ( ___ ) __ - ___ - __ - __"
                        />

                        <p>
                            Please provide the mobile number in the following format -
                            971541234567 ( If you live in the UAE)
                        </p>

                        <Button
                            text="Next"
                            borderRadius="30px"
                            padding="10px 20px"
                            width="100%"
                            bg="#002B49"
                            uppercase
                            color="white"
                        />
                    </div>
                }
            />
            <Accordion
                type="forApply"
                title="Applicants"
                content={
                    <div>
                        <AmityInputs
                            label="Middle Names"
                            type="text"
                            placeholder="Middle Names"
                        />
                        <AmityInputs label="Surname*" type="text" placeholder="Surname" />
                    </div>
                }
            />

            <Accordion
                type="forApply"
                title="Contacts"
                content={
                    <div>
                        <AmityInputs
                            label="Middle Names"
                            type="text"
                            placeholder="Middle Names"
                        />
                        <AmityInputs label="Surname*" type="text" placeholder="Surname" />
                    </div>
                }
            />

            <div className="facts">
                <Facts
                    theme={"orange"}
                    background={rasm}
                    header={"83%"}
                    subheader={"of recent graduates started new jobs"}
                    stickColor={"#002B49"}
                />
                <Facts
                    theme={"dark"}
                    background={rasm2}
                    header={"83%"}
                    subheader={"of recent graduates started new jobs"}
                    stickColor={"#FFC600"}
                />
                <Facts
                    theme={"orange"}
                    background={rasm3}
                    header={"83%"}
                    subheader={"of recent graduates started new jobs"}
                    stickColor={"#002B49"}
                />
            </div>
        </div>
    );
};

export default Page4;