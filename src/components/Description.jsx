import React from 'react'

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        const { title, location_address, location_zone, location_city, description } = this.props;
        return (
            <div>
                <h3> { title } </h3>
                <div>

                {location_address && 
                    <span className="post-special-text"> { location_address }, </span>
                }
                {location_zone && 
                    <span className="post-special-text"> { location_zone }, </span>
                }
                {location_city && 
                    <span className="post-special-text"> { location_city } </span>
                }
                </div>
                <div className="description-container">
                    <div className="description-text"> { description } </div>
                </div>

            </div>
        )
    }
}

export default Description;