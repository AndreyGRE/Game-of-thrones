export default class GotService {
    
    constructor(){

        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

     getResours = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error (`could not fetch ${url}, status: ${res.status}`);

        }

        return  await res.json();
    };
    
    getAllCharacters = async () => {
        const res = await this.getResours('/characters?page=1&pageSize=10');
        return res.map(this._transformCharacter)
    }
   
    getCharacters = async  (id) => {
        const character = await this.getResours(`/characters/${id}`)
        return this._transformCharacter(character)
    }


    getHouse = async (id) =>{
        const house = await this.getResours(`/houses/${id}/`)
        return this._transformHouse(house)
    }
    getAllHouses = async() =>{
        const res = await this.getResours('/houses/')
        return res.map(this._transformHouse)
    }

    getAllBooks = async()=>{
        const res = await this.getResours('/books/')
        return res.map(this._transformBook)
    }
    getBooks = async(id)=>{
        const book = await  this.getResours(`/books/${id}`)
        return this._transformBook(book)
    }
  
    isSet(data){
        if(data ){
            return data
        }else{
            return "неизвестно"
        }
    }

    _transformCharacter = (char) => {

        return {   
        name:    char.name,
        gender:  this.isSet(char.gender),
        born:    this.isSet(char.born),
        died:    this.isSet(char.died),
        culture: this.isSet(char.culture)
        }
    }

    _transformHouse = (house) => {

        return {
            name: house.name,
            region: this.isSet(house.region),
            words: this.isSet(house.words),
            titles: this.isSet(house.titles),
            overlord: this.isSet(house.overlord),
            ancestralWeapons: this.isSet(house.ancestralWeapons)
            
        }
    }

    _transformBook = (book) => {

        return {
            name: book.name,
            numberOfPages: this.isSet(book.numberOfPages),
            publisher: this.isSet(book.publisher),
            released: this.isSet(book.released)
        }
    }

}






