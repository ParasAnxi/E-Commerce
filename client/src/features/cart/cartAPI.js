const CART_API = "http://localhost:3001/cart";

export const fetchCartItems = ()=>{
    return new Promise(async(resolve)=>{
        const response = await fetch(CART_API,{
            method:'GET',
        });
        const data = await response.json();
        resolve({ data });
    });
};

export const addToCart = (item)=>{
    return new Promise(async(resolve)=>{
        const response = await fetch(CART_API,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(item),
        });
        const data = await response.json();
        resolve({ data });
    });
};

export const deleteFromCart = (id)=>{
    return new Promise(async(resolve)=>{
      const response = await fetch(`${CART_API}/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      });
      const data = await response.json();// eslint-disable-line
      resolve({ data: { id: id } });
    });
};

export const resetCart = ()=>{
    return new Promise(async(resolve)=>{
        const response = await fetchCartItems();
        const items = response.data;
        for(let item in items){
            await deleteFromCart(item.id);
        };
        resolve({ status: 'SUCCESS'});
    });
};