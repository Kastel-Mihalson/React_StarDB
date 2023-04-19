import React, { Component } from 'react';

import './item-details.css';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

export const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        loading: false,
        image: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        this.setState({
            loading: true
        })

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item: item,
                    loading: false,
                    image: getImageUrl(item)
                })
            })
    }

    render() {
        if (!this.state.item) {
            return <span>Select a item from a list</span>
        }
        const { 
            item, image 
        } = this.state;

        const { name } = item;

        return (
            <div className="item-details card">
                { this.state.loading 
                ? <Spinner /> 
                : 
                    <>
                        <img 
                            className="item-image"
                            src={image} />

                        <div className="card-body">
                            <h4>{name}</h4>
                            <ul className="list-group list-group-flush">
                                {
                                    React.Children.map(this.props.children, (child) => {
                                        return React.cloneElement(child, { item });
                                    })
                                }
                            </ul>
                        </div>
                    </>}
            </div>
        )
    }
}