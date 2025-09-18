import type { CSSProperties } from "react";

const firstName = 'Deivi';
const lastName = 'Gonzalez';

const favoriteGames = ['Elden Ring', 'Smash', 'Fornite'];
const isActive = false;

const address = {
    zipCode: 'ABC-123',
    country: 'Canada'
}

const myStyles: CSSProperties = {
    backgroundColor: '#f9f9',
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
}

export const MyAwesomeApp = () => {

    return (
        <>
            <h1>{ firstName }</h1>
            <h2>{ lastName }</h2>

            <p> {favoriteGames.join(', ') }</p>

            <h1> { isActive ? 'Activo' : 'No Activo' }</h1>

            <p
               style = {myStyles} 
            >{JSON.stringify(address)}</p>
        </>
    );
};


// export function MyAwesomeApp() {

//     return (
//         <>
//             <h1>Deivi</h1>

//             <h2>Gonzalez</h2>
//         </>
//     )
// }