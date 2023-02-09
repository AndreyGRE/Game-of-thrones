import React, {Component} from 'react';
//import {Col, Row} from 'reactstrap'
import ItemList from '../itemList';
//import CharDetails,{Field} from '../charDetails';
import ErrorMesenge from '../errorMessage';
import GotService from '../servis/gotService';
import RowBlock from '../rowBlock';

import DetailsItem, {Fieldd} from '../detailsItem';


export default class HousesPage extends Component {
    gotService = new GotService();
    state = {
      selectedHouses: 1,
      error: false

    }
    componentDidCatch(){
        this.setState({
            error: true
        })
    }
    onItemSelected =(id)=>{
        this.setState({
            selectedHouses:id
        })
    }
    
 
    render(){
        if(this.state.error){
            return <ErrorMesenge></ErrorMesenge>
        }
           
        const itemList = (<ItemList 
            onItemSelected={this.onItemSelected}
            getData = {this.gotService.getAllHouses}
            renderItem={(item)=>`${item.name}`}
             />)
            
        
        const charDetails = (
            <DetailsItem 
                    charId={this.state.selectedHouses}
                    getDatafunct={this.gotService.getHouse(this.state.selectedHouses)}>
                <Fieldd field ='region' label ="Region" />
                <Fieldd field ='words' label ="Words" />
                <Fieldd field ='titles' label ="Titles" />
                <Fieldd field ='overlord' label ="Overlord" />
                <Fieldd field ='ancestralWeapons' label ="AncestralWeapons" />
            
            </DetailsItem>
        )
        return(
            <RowBlock 
            left={itemList} 
            right={charDetails} 
            />   
        )
    }
}

