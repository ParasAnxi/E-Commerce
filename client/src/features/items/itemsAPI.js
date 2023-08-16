const ITEMS_API = "http://localhost:3001/items";

export const fetchItems = () => {
  return new Promise(async (resolve) => {
    const response = await fetch(ITEMS_API, {
      method: "GET",
    });
    const data = await response.json();
    resolve({ data });
  });
};

export const addItems = (item)=>{
  return new Promise(async(resolve)=>{
    const response = await fetch(ITEMS_API,{
      method:"POST",
      headers:{'content-type':'application/json'},
      body: JSON.stringify(item)
    });
    const data = await response.json();
    resolve({ data });
  });
};

export const updateItem = (item)=>{
  return new Promise(async(resolve)=>{
    const response = await fetch(`${ITEMS_API}/${item.id}`,{
      method:'PATCH',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(item),
    });
    const data = await response.json();
    resolve({ data });
  });
};

export const deleteItem = (itemId)=>{
  return new Promise(async(resolve)=>{
    const response = await fetch(`${ITEMS_API}/${itemId}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();// eslint-disable-line
    resolve({ data: { id: itemId } });
  });
}