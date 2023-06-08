const getRole = async (email) =>{
    const response = await fetch(`${import.meta.env.VITE_api_url}/user?email=${email}`)
    const user = await response.json()
    return user?.role

}

export default getRole;