export default class SwapiService {
    
    _apiBase = 'https://pokeapi.co/api/v2/';

    getResourse = async (sourse: string) => {
        const res = await fetch(`${this._apiBase}${sourse}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${sourse}, Error-status: ${res.status}`);
        } 
        const body = await res.json();
        return body;
    }

    getAllPokemons = async () => {
        const pokemons = this.getResourse("pokemon/?limit=100")
            .then((pok) => pok.results)
        return pokemons;
    }

    getPokemon = async (id: number) => {
        const pokemon = this.getResourse(`pokemon/${id}`);
        return pokemon;
    }

    getPokemonAbility = async (id: number) => {
        const pokemon = this.getResourse(`ability/${id}`);
        return pokemon;
    }
}