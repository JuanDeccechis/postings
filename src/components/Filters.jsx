import React from 'react'
import { connect } from 'react-redux'
import { filterPosts } from '../actions'

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFilter: "Todos"
        }
    }

    setFilter = (filter) => {
        const { currentFilter } = this.state;
        const { onFilterPosts } = this.props;
        if (filter !== currentFilter) {
            this.setState({ currentFilter: filter });
            onFilterPosts(filter);
        }
    }

    render() {
        return (
            <div className="filters">

                <h2>Filtrado actual</h2>
                <h3>Dirección</h3>
                <input placeholder="Buscar por direccion"></input>
                <h3>Tipo de operación</h3>
                <input type="radio" id="age1" name="age" value="30" onClick={() => this.setFilter("Venta")} />
                <label htmlFor="age1">Comprar</label><br />
                <input type="radio" id="age2" name="age" value="60" onClick={() => this.setFilter("Alquiler")} />
                <label htmlFor="age2">Alquilar</label><br />  
                <input type="radio" id="age3" name="age" value="100" onClick={() => this.setFilter("Alquiler Temporal")} />
                <label htmlFor="age3">Temporal</label><br />
                <input type="radio" id="age3" name="age" value="100" onClick={() => this.setFilter("Todos")} />
                <label htmlFor="age3">Todos</label><br /><br />
            </div>
        )
    }
}

  const mapDispatchToProps = dispatch => {
    return {
        onFilterPosts: (funToFilter) => dispatch(filterPosts(funToFilter)),
    };
  };

export default connect(null, mapDispatchToProps)(Filters);