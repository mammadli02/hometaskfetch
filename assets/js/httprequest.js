const baseURL ="https://jsonplaceholder.typicode.com"
export const getAllCategories = async()=>{
    let globalData;
    await fetch(`${baseURL}/users`)
    .then(response => response.json())
    .then(data => {
        globalData = data;
    })

    return globalData;
}
export const deleteCategoryByID = async(id)=>{
    await fetch(`${baseURL}/users/${id}`,{
        method: 'DELETE'
    })
}
export const postCategory = async(users)=>{
    let globalData;
    await fetch(`${baseURL}/users`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json;'
        },
        body: JSON.stringify(users)
    }).then(res=>res.json())
    .then(data =>{
        globalData = data;
    })

    return globalData;
}
export const getCategoryByID = async(id)=>{
    let globalData;
    await fetch(`${baseURL}/users/${id}`)
    .then(response => response.json())
    .then(data =>{
        globalData = data;
    })
    return globalData;
}