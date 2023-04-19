import React, { Component } from 'react';

import './item-list.css';
import Spinner from '../spinner/spinner';
import { Link } from 'react-router-dom';

export default class ItemList extends Component {
    state = {
        data: null
    }

    componentDidMount() {

        const { getData } = this.props;

        getData()
            .then((data) => {
                this.setState({
                    data
                })
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item
            
            const label = this.props.renderItem(item);
    
            return (
                <li 
                    className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    { label }
                </li>
            )
        })
    }

    render() {
        const { data } = this.state;

        if(!data) {
            return <Spinner />
        }

        const items = this.renderItems(data)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        )
    }
}

// const ItemList = (props) => {
    
//     const { getData, onItemSelected } = props;
//     const items = getData.map((item) => {
//         const { id } = item
        
//         const label = this.props.children(item);

//         return (
//             <li 
//                 className="list-group-item"
//                 key={id}
//                 onClick={() => onItemSelected(id)}>
//                 { label }
//             </li>
//         )
//     })

//     return (
//         <ul className="item-list list-group">
//             {items}
//         </ul>
//     );
// }

// export default ItemList