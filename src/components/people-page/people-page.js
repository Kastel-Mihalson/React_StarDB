import './people-page.css';

import { Component } from "react";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from '../row';
import { Record } from '../item-details/item-details';

export default class PeoplePage extends Component {
    
    swapiService = new SwapiService();
    state = {
        selectedPerson: 3
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    onRenderItem = (item) => {
        const { name, gender, birthYear } = item;
        return `${name} (${gender}, ${birthYear})`;
    }

    render() {
        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItem={this.onRenderItem} />
        )
        
        const personDetail = (
            <ItemDetails
                itemId={this.state.selectedPerson}
                getData={this.swapiService.getPerson}
                getImageUrl={this.swapiService.getPersonImage}>

                    <Record field="gender" label="Gender" />
                    <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>
        )

        return (
            <Row left={itemList} right={personDetail} />
        )
    }
}