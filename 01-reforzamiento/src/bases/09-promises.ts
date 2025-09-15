

const myPromise = new Promise<number> ( ( resolve, reject ) => {

    setTimeout( () => {

        reject('se perdio');
    }, 2000)

})


myPromise.then((myMoney) => {
    console.log(`tengo mi dinero ${ myMoney }`)
}).catch(reason => {
    console.warn(reason)
}).finally(() => {
    console.log('pues a seguir con mi vida')
})







