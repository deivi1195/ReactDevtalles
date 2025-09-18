import { ItemCounter } from "./shopping-cart.tsx/ItemCounter";

interface ItemInCart {
    productName2: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    {  productName2: "Gorra", quantity: 2 },
    {  productName2: "Camisa", quantity: 3 },
    {  productName2: "Llavero", quantity: 8 },
]

export function FirstStepsApp() {

    return (
        <>
            <h1>Hola Mundo</h1>

            {
                itemsInCart.map( ( {productName2, quantity } ) => (
                    <ItemCounter key={productName2} productName={productName2} quantity={ quantity }/>
                ) )
            }
            
            {/* <ItemCounter productName="Gorra" quantity={ 2 }/>
            <ItemCounter productName="Camisa" quantity={ 5 }/>
            <ItemCounter productName="Llavero" quantity={ 56 }/> */}
            
            {/* <p>Esto es un parrafo !!</p>

            <button>Click me</button>

            <div>
                <h2>Hola dentro de un div</h2>
            </div> */}
        </>
    )
}