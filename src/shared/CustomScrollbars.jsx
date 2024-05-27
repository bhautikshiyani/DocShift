import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2';

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        backgroundColor: '#4A5568',
        borderRadius: '6px',
        height:'8px'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
};
const CustomScrollbars = (props) => {
    return (
        <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            renderThumbHorizontal={renderThumb}
            renderThumbVertical={renderThumb}
            {...props}
        />
    )
}
export default CustomScrollbars
