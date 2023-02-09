import React, {Component} from 'react';
import './charDetails.css';
import GotService from '../servis/gotService';


const Fieldd = ({char, field , label})=>{
    return(
        <li className="list-group-item d-flex justify-content-between">
        <span className="term">{label}</span>
        <span>{char[field]}</span> 
        </li>
    )
}

export {
    Fieldd 
}


export default class DetailsItem extends Component {

    gotService = new GotService();

    state = {
        char : 1
    }

    componentDidMount(){
        this.upChar();
    }
    componentDidUpdate(prevProps){
        if(this.props.charId !== prevProps.charId){
            this.upChar();
        }
    }
    upChar(){
        const {charId} = this.props;
        if(!charId){
            return
        }
        const {getDatafunct} = this.props;
        //this.gotService.getBooks(charId)
        getDatafunct
        .then((char)=>{
                this.setState({char})
            })

        // getDatafunct({charId})
        //     .then((char)=>{
        //             this.setState({char})
        //     })
                //th
            //this.foo.bar = 0;
    } 

    render() {
        if(!this.state.char){
            return <span className='selected-error'>ошибочкка</span>
        }

        const {char} = this.state
        const {name} = char
        

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                   {
                    React.Children.map(this.props.children, (child)=>{
                        return React.cloneElement(child, {char})
                    })
                   }
                </ul>
            </div>
        );
    }
}