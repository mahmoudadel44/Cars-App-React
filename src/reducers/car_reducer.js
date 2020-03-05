
// const state={
//     name:'dfdf',
//     lastname:'ghg',
//     list:[],
//     carinfo:[]
// }


export default function (state={},action){
    switch(action.type){
        case 'SEARCH_CARS':
        return {...state,list:action.payload}
        case 'CAR_Detail':
            return {...state,carinfo:action.payload}
        default:
            return state
    }
}