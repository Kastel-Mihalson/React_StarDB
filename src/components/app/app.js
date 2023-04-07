import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";

import './app.css'
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import Row from "../row";
import ItemDetails from "../item-details";
import { Record } from "../item-details/item-details";
import { PersonList } from "../sw-components/item-lists";

export default class App extends Component {

    swapiService = new SwapiService();

    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <PeoplePage />

            </div>
        )
    }
}