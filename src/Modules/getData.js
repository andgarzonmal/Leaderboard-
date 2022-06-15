const fetchUrl= "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/UFEFOvdlSZM4VGo3r901/scores"

export const getData = async () => {
    const response = await fetch(fetchUrl)
    const data = await response.json()
    return data
}


export const deployData = async () => {
    getData().then(result => 
        console.log(result.result) )
    
}