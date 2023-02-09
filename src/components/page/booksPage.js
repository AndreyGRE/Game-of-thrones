import React, {Component} from 'react';
//import {Col, Row} from 'reactstrap'
import ItemList from '../itemList';
import ErrorMesenge from '../errorMessage';
import GotService from '../servis/gotService';
import RowBlock from '../rowBlock';
import DetailsItem,{Fieldd} from '../detailsItem/detailsItem';

export default class BookPage extends Component {
    gotService = new GotService();
    state = {
      selectedBook: 1,
      error: false

    }
    componentDidCatch(){
        this.setState({
            error: true
        })
    }
    onItemSelected =(id)=>{
        this.setState({
            selectedBook:id
        })
    }
    
    render(){
        if(this.state.error){
            return <ErrorMesenge></ErrorMesenge>
        }
        
        const itemList = (<ItemList 
            onItemSelected={this.onItemSelected}
            getData = {this.gotService.getAllBooks}
            renderItem={(item)=>item.name}
            />)
  
        const charDetails = (
            <DetailsItem
                    charId={this.state.selectedBook}
                    getDatafunct={this.gotService.getBooks(this.state.selectedBook)}> 
                <Fieldd field ='numberOfPages' label ="NumberOfPages" />
                <Fieldd field ='publisher' label ="Publisher" />
                <Fieldd field ='released' label ="Released" />
                
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

                    
                        
                

                   