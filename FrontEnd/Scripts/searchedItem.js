async function searchedQ (q){

    try {
         let res = await fetch(`https://fakestoreapi.com/products/category/${q}`)
         let data = await res.json()
         return data
    } catch (error) {
        console.log(error)
    }
}

export default searchedQ