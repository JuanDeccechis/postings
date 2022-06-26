import React from 'react'
import { connect } from 'react-redux'
import { filterPostsByType, filterPostsByLocation, filterPostsByTypeAndLocation } from '../actions'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFilter: "Todos",
            currentFilterByType: "Todos",
            currentFilterByLocation: "",
        }
    }

    toggleAcordion = (numeroAcordion) => {
        let contenidos = document.querySelectorAll(".accordion-content");
        let selector = document.querySelectorAll(".selectorAccordion");
        if (numeroAcordion >= 0) {
            contenidos[numeroAcordion].classList.toggle("animaAccordion");
            selector[numeroAcordion].classList.toggle("muestraInfo");
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
            <div className="container filters">

                <h2>Filtrado actual</h2>
                <div className="inline divider cursor" onClick={() => this.toggleAcordion(0)}>
                    <div className="accordion-title"> 
                        <h3>Dirección</h3>
                    </div> 
                    <div className="selectorAccordion">
                        <ExpandMoreIcon className={`icon right`}/>
                    </div>
                </div>
                <div className="accordion-content">
                    <input placeholder="Buscar por direccion" onBlur={(evt) => this.setFilterByLocation(evt.target.value)} />
                </div>

                <div className="inline divider cursor" onClick={() => this.toggleAcordion(1)}>
                    <div className="accordion-title"> 
                        <h3>Tipo de operación</h3>
                    </div> 
                    <div className="selectorAccordion">
                        <ExpandMoreIcon className={`icon right`}/>
                    </div>
                </div>
                <div className="accordion-content">

                    <div className="radio-option">
                        <input type="radio" id="age1" name="age" value="30" onClick={() => this.setFilterByType("Venta")} />
                        <label htmlFor="age1">Comprar</label>
                    </div>
                    <div className="radio-option">
                        <input type="radio" id="age2" name="age" value="60" onClick={() => this.setFilterByType("Alquiler")} />
                        <label htmlFor="age2">Alquilar</label> 
                    </div>
                    <div className="radio-option">
                        <input type="radio" id="age3" name="age" value="100" onClick={() => this.setFilterByType("Alquiler Temporal")} />
                        <label htmlFor="age3">Temporal</label>
                    </div>
                    <div className="radio-option">
                        <input type="radio" id="age3" name="age" value="100" onClick={() => this.setFilterByType("Todos")} />
                        <label htmlFor="age3">Todos</label>
                    </div>
                </div>


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