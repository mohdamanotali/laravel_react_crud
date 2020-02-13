export const readData = page_no => {
    let fetch_url = 'api/score';
    if(page_no) {
        fetch_url = fetch_url + '?page=' + page_no
    }
    return fetch(fetch_url, {
        method: 'get',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(result => result.json())
    .catch(error => {
        console.log(error)
    });
}

export const insertData = (input_data, is_edit) => {
    let method_type = 'post'
    if(is_edit) {
        method_type = 'put'
    }
    return fetch('api/score', {
        method: method_type,
        body: JSON.stringify(input_data),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
}

export const deleteData = id => {
    return fetch('api/score/'+id, {
        method: 'delete',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
}