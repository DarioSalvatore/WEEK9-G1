import React from "react";

class ImageComponent extends React.Component {
    render() {
    return (
        <img src={this.props.cerca} alt={this.props.descrizione} />
    )
}
};

export default ImageComponent;