import React, {Component} from 'react';
import GotService from '../servis/gotService';
import DetailsItem,{Fieldd} from '../detailsItem';

export default class BooksItem extends Component {
    gotService = new GotService();
   
    render(){
        return (
            <DetailsItem
                        charId= {this.props.bookId}
                        getDatafunct={this.gotService.getBooks(this.props.bookId)}
                        > 
                <Fieldd field ='numberOfPages' label ="NumberOfPages" />
                <Fieldd field ='publisher' label ="Publisher" />
                <Fieldd field ='released' label ="Released" />
        
            </DetailsItem>
        )
       
    }
}