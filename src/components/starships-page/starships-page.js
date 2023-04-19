import { Component } from "react";
import './starships-page.css';
import Row from "../row";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";
import ItemDetails from "../item-details";
import { Record } from "../item-details/item-details";

export default class StarshipsPage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedStarship: 3
    }

    onStarshipSelected = (id) => {
        this.setState({
            selectedStarship: id
        })
    }

    renderItem = (item) => {
        const { name } = item;
        return `${name}`
    }

    render() {
        const starshipsList = (
            <ItemList 
                onItemSelected={this.onStarshipSelected}
                getData={this.swapiService.getAllStarships}
                renderItem={this.renderItem} />
        )

        const starshipDetail = (
            <ItemDetails
                itemId={this.state.selectedStarship}
                getData={this.swapiService.getStarship}
                getImageUrl={this.swapiService.getStarshipImage}>

                    <Record field="crew" label="Crew" />
                    <Record field="model" label="Model" />
                    <Record field="starshipClass" label="Starship class" />

            </ItemDetails>
        )

        return (
            <Row left={starshipsList} right={starshipDetail}/>
        )
    }
}