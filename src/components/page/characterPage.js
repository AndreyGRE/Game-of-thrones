import React, {Component} from 'react';
//import {Col, Row} from 'reactstrap'
import ItemList from '../itemList';
import ErrorMesenge from '../errorMessage';
import GotService from '../servis/gotService';
import RowBlock from '../rowBlock';
import DetailsItem,{Fieldd} from '../detailsItem/detailsItem';


export default class CharacterPage extends Component {
    gotService = new GotService();
    state = {
      selectedChar: 130,
      error: false

    }
    componentDidCatch(){
        this.setState({
            error: true
        })
    }
    onItemSelected =(id)=>{
        this.setState({
            selectedChar:id
        })
    }

    render(){
        if(this.state.error){
            return <ErrorMesenge></ErrorMesenge>
        }
        const itemList = (<ItemList 
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllCharacters}
            renderItem={({name,gender})=>`${name} (${gender})`}
            />)
            
        const charDetails = (
            <DetailsItem 
                    charId={this.state.selectedChar}
                    getDatafunct={this.gotService.getCharacters(this.state.selectedChar)}>
                <Fieldd field ='gender' label ="Gender" />
                <Fieldd field ='born' label ="Born" />
                <Fieldd field ='died' label ="Died" />
                <Fieldd field ='culture' label ="Culture" />
            </DetailsItem>
    
        )
        return(
            <RowBlock left={itemList} right={charDetails} />   
        )
    }
}