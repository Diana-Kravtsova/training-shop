/*

export async function getProducts(sexRoute){
    return (await fetch(`https://fsrs-shop.herokuapp.com/item/sex/${sexRoute}`)).json();
}
*/

export async function getProducts(sexRoute){
    return (await fetch(`http://localhost:8080/item/sex/${sexRoute}`)).json();
}
/*export async function getProduct(id){
    return (await fetch(`https://fsrs-shop.herokuapp.com/item/${id}`)).json();
}*/

export async function getProduct(id){
    return (await fetch(`http://localhost:8080/item/${id}`)).json();
}

