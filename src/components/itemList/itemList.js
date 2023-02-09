import React, {Component} from 'react';
import './itemList.css';
import GotService from '../servis/gotService';
import Spiner from '../spiner/spiner';

export default class ItemList extends Component {

        gotService = new GotService();

        state = {
            itemList : null
        }

    componentDidMount(){
        const {getData} = this.props;
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr){
        return arr.map((item,i)=>{
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <li 
                key={id} 
                className="list-group-item"
                //сделать уникальный ключ вменсто i
                onClick={() => {this.props.onItemSelected(i + 1
                  //  + 41
                    )}}
                >
                {label}
            </li> 
            )
        })
    }

    render() {
        const {itemList} = this.state;

        if(!itemList){
            return <Spiner/>
        }

        const items = this.renderItems(itemList);

            return (
                    <ul className="item-list list-group">
                    {items} 
                    </ul>
                );
    }
}