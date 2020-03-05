import axios from 'axios'
const URL_ROOT=" http://localhost:3004/carsIndex"
export function getCars(keywords){
const request=axios.get(`${URL_ROOT}/?q=${keywords}`)
.then(res=>res.data)
console.log(request);
return{
    type:'SEARCH_CARS',
    payload:request
}
}

export function carDetail(id){
const request=axios.get(`${URL_ROOT}/?id=${id}`)
.then(res=>res.data)
console.log(request);
return{
    type:'CAR_Detail',
    payload:request
}
}

