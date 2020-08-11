import React from 'react';
import Form from '../../containers/Form/Form'
import SampleBG from '../../assets/images/Sample_BG.jpg'

const firstSection = () => (
    <div >
        <div style={{ width: "100%", position: "relative" }}>
            <div style={{ width: "50%", float: "left" }}>
                <img src={SampleBG} alt="Sample" style={{ float: "left", marginLeft: "300px", width: "150px", height: "200px" }} />
            </div>
            <div style={{ float: "right", width: "50%" }}>
                <Form />
            </div>
        </div>
    </div>
)

export default firstSection;