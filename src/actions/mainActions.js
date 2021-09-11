export function postRequest(source, body, token){
    return new Promise( async (resolve, reject) => {
        try {

            const response = await fetch(
                source,
                {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `bearer ${token}` 
                    }, 
                    body: JSON.stringify(body)
                }
            )
    
            if(!response.ok){
                reject("Request failed with status code " + response.status)
            } else {
                const responseJson = await response.json()
                resolve(responseJson)
            }

        } catch (error) {
            reject("Error happend " + error)
        }

    })
}

export function getRequest(source, token){
    return new Promise( async (resolve, reject) => {
        try {

            const response = await fetch(
                source,
                {
                    method: 'GET',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `bearer ${token}` 
                    }
                }
            )
    
            if(!response.ok){
                reject("Request failed with status code " + response.status)
            } else {
                const responseJson = await response.json()
                resolve(responseJson)
            }

        } catch (error) {
            reject("Error happend " + error)
        }

    })
}