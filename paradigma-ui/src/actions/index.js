import axios from 'axios';
let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    }
  };

export function getPhoneList(){
    return(dispatch) => {
        return axios.get('http://localhost:8080/phones', axiosConfig).then(response => {
            dispatch(listPhone(response.data));
        })
    }
}

export function listPhone(phones) {
    return {
        type: 'FETCH_PHONES',
        data: phones
    }
}