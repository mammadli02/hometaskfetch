const baseURL ="https://jsonplaceholder.typicode.com"
export const getAllCategories = async()=>{
    let globalData;
    await fetch(`${baseURL}/posts`)
    .then(response => response.json())
    .then(data => {
        globalData = data;
    })

    return globalData;
}
export const deleteCategoryByID = async(id)=>{
    await fetch(`${baseURL}/posts/${id}`,{
        method: 'DELETE'
    })
}
export const postCategory = async(posts)=>{
    let globalData;
    await fetch(`${baseURL}/posts`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json;'
        },
        body: JSON.stringify(posts)
    }).then(res=>res.json())
    .then(data =>{
        globalData = data;
    })

    return globalData;
}
export const getCategoryByID = async(id)=>{
    let globalData;
    await fetch(`${baseURL}/posts/${id}`)
    .then(response => response.json())
    .then(data =>{
        globalData = data;
    })
    return globalData;
}