import React from 'react'
import { connect } from 'react-redux'
import { filterPostsByType, filterPostsByLocation, filterPostsByTypeAndLocation } from '../actions'

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFilter: "Todos",
            currentFilterByType: "Todos",
            currentFilterByLocation: "",
        }
    }

    setFilterByLocation= (filter) => {
        const { currentFilter, currentFilterByType } = this.state;
        const { onFilterPostsByLocation, onFilterPostsByTypeAndLocation } = this.props;
        if (filter !== currentFilter) {
            this.setState({ currentFilter: filter, currentFilterByLocation: filter });
            //onFilterPostsByLocation(filter);
            onFilterPostsByTypeAndLocation(currentFilterByType, filter);
        }
    }

    setFilterByType = (filter) => {
        const { currentFilter, currentFilterByLocation } = this.state;
        const { onFilterPostsByType, onFilterPostsByTypeAndLocation } = this.props;
        if (filter !== currentFilter) {
            this.setState({ currentFilter: filter, currentFilterByType: filter });
            //onFilterPostsByType(filter);
            onFilterPostsByTypeAndLocation(filter, currentFilterByLocation);
        }
    }

    render() {
        return (
            <div className="filters">

                <h2>Filtrado actual</h2>
                <h3>Dirección</h3>
                <input placeholder="Buscar por direccion" onBlur={(evt) => this.setFilterByLocation(evt.target.value)} />
                <h3>Tipo de operación</h3>
                <input type="radio" id="age1" name="age" value="30" onClick={() => this.setFilterByType("Venta")} />
                <label htmlFor="age1">Comprar</label><br />
                <input type="radio" id="age2" name="age" value="60" onClick={() => this.setFilterByType("Alquiler")} />
                <label htmlFor="age2">Alquilar</label><br />  
                <input type="radio" id="age3" name="age" value="100" onClick={() => this.setFilterByType("Alquiler Temporal")} />
                <label htmlFor="age3">Temporal</label><br />
                <input type="radio" id="age3" name="age" value="100" onClick={() => this.setFilterByType("Todos")} />
                <label htmlFor="age3">Todos</label><br /><br />
            </div>
        )
    }
}

  const mapDispatchToProps = dispatch => {
    return {
        onFilterPostsByLocation: (funToFilter) => dispatch(filterPostsByLocation(funToFilter)),
        onFilterPostsByType: (funToFilter) => dispatch(filterPostsByType(funToFilter)),
        onFilterPostsByTypeAndLocation: (filterByType, filterByLocation) => dispatch(filterPostsByTypeAndLocation(filterByType, filterByLocation)),
    };
  };

export default connect(null, mapDispatchToProps)(Filters);