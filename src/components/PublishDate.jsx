import React from 'react'

class PublishDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            publish_dates_count: 0
        }
    }

    componentDidMount() {
        const { publish_date, posting_id } = this.props;
        let reorderedDate = this.setReorderedDate(publish_date);
        const datePublish = new Date(reorderedDate);
        const dateToday = new Date();
        const diffTime = Math.abs(dateToday - datePublish);
        //diffTime is in milliseconds, the cast to dates is / (1000 * 60 * 60 * 24)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        this.setState({ publish_dates_count : diffDays })

    }

    setReorderedDate = (publish_date) => {
        if (publish_date.includes("/")) {
            const dateParts = publish_date.split("/");
            let dd = dateParts[0];
            let mm = dateParts[1];
            let yyyy = dateParts[2];
            return `${mm}/${dd}/${yyyy}`;
        }
    }

    render() {
        const { publish_dates_count } = this.state;
        return (
            <span> 
                Publicado hace {publish_dates_count} días
            </span>
        )
    }
}

export default PublishDate;