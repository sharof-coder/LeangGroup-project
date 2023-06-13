import React from 'react';
import BackToTop from 'react-back-top';
const Demo = (props) => {
    const config = {
        text: "&#9968;",
        topDistance: 10,
        timing:'easeIn'
    }
    return <BackToTop {...config} />
}
export default Demo;