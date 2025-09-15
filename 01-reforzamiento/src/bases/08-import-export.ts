import { heroes, Owner, type Hero } from "../data/heroes.data"



// const getHeroById = (id: number): Hero | undefined => {

//     const hero = heroes.find( (hero) => {

//         return hero.id === id
//     } )

//     // if ( !hero ) {
//     //     throw new Error(`No existe un heroe con ese id ${id}`)
//     // }

//     return hero;
// }

//console.log(getHeroById(7))


export const getHeroByOwner = (owner: Owner): Hero[] | undefined => {

    const heroesByOwner = heroes.filter( (hero) => {

        return hero.owner === owner
    } )

    // if ( !hero ) {
    //     throw new Error(`No existe un heroe con ese id ${id}`)
    // }

    return heroesByOwner;
}









