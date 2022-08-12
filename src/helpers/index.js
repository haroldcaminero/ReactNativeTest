class Helper {
    static callAPI(url, callback, method){
        let headers = {
            Accept: 'application/json'
        }
        if(typeof addHeaders == 'object'){
            headers = Object.assign(headers, addHeaders);
        }
        fetch(
            url,
            {
                method: method !== undefined ? method : 'GET',
                headers
            }
        )
        .then((response) => response.json())
        .then((json) => {
            if(typeof callback == 'function'){
                callback(true, json)
            }
        })
        .catch((error) => {
            if(typeof callback == 'function'){
                callback(false, error)
            }
        });
    }

    static sliceIntoChunks = (arr, chunkSize) => {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

}

export default Helper;