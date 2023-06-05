import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
//import styled from 'styled-components';
import ErrorMesenge from '../errorMessage';
import GotService from '../servis/gotService';
import BooksPage from '../page/Bindex';
import HousesPage from '../page/HousesPage';
import CharacterPage from '../page';
import BooksItem from '../page/booksItem';

import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';

export default class App extends Component {
    gotService = new GotService();
    state = {
        showRandomItem: true,
        
        error : false
    }
componentDidCatch(){
    this.setState({
        error: true
    })
}

    onAl = () => {
        this.setState((state)=> {
            return {
                showRandomItem: !state.showRandomItem
            }
        })
    }
       
    render(){
        const item = this.state.showRandomItem ? <RandomChar/> : null;
        if(this.state.error){
            return <ErrorMesenge></ErrorMesenge>
        }
        
        return (
         <Router>
            <div className="app"> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {item}  
                        <button 
                        className="toggle-btn"
                        onClick={this.onAl}
                        >
                            Нажми для скрытия рандомного персонажа
                        </button>
                        </Col>
                    </Row>
                <Routes>
                    <Route path='/' exact element={<h1>добро пожаловать в базу данных</h1> }/>
                    <Route path='/characters' exact element={<CharacterPage/>}/>
                    <Route path='/houses'exact element={<HousesPage/>}/> 
                    <Route path='/books'exact element={<BooksPage/>}/> 
                     
                    <Route path='/books/:id' 
                           element={<BooksItem />}

                            
                            />   
                </Routes> 
                    
                </Container> 
            </div>
         </Router> 
            

        )
    }
}
