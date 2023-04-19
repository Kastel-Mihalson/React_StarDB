import { Component } from "react";
import './planets-page.css';
import Row from "../row";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";

export default class PlanetPage extends Component {
    swapiService = new SwapiService();
    state = {
        selectedPlanet: 3
    }

    onPlanetSelected = (id) => {
        console.log('planet id: ' + id);
        this.setState({
            selectedPlanet: id
        })
    }

    onRenderItem = (item) => {
        const { name } = item;
        return `${name}`
    }
    render() {
        const itemList = (
            <ItemList 
                onItemSelected={this.onPlanetSelected}
                getData={this.swapiService.getAllPlanets}
                renderItem={this.onRenderItem} />
        )

        return (
            <Row left={itemList} right="" />
        )
    }
}