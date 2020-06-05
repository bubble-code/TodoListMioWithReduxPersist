import { createStore, applyMiddleware, Store} from 'redux'
import thunk from 'redux-thunk'
import {persistStore, persistReducer, PersistConfig} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { rootReducer } from './Todo/Reducer'
// import { INITIAL_DATA } from '../utils/constants/INITIAL_DATA'
// import { Datas, TAction } from '../utils/Interfaces/Interface.d'
// import { openNotification } from '../utils/function/openNotification';
// import {v4 as uuidv4} from 'uuid'

const reduxPersistConfig: PersistConfig<any> = {
    key: 'application',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(reduxPersistConfig, rootReducer);

export const store : Store = createStore(pReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

// export const initial_data = [
//     {
//         key: uuidv4(),
//         title: 'Use Hook in react application',
//         date: '2020-04-15',
//         complete:false
//     },
// ];

// interface IAction{
//     type:string;
//     dat: Datas;
// }

// // export function rootReducer(state:AppState=initialState, action:IReduxBaseAction){
// //    switch(action.type){
// //        case EReduxActionTypes.TOGGLE_MESSAGE:
// //            return {...state, showMessage:!state.showMessage};
// //            default:
// //                return state;
// //    } 
// }
// export function reducerToodo(state: Datas[] = initial_data, action: IAction){
//     switch (action.type) {
//         case "Agregar":
//             openNotification('bottomLeft', 'TODO added');
//             return [...state, action.dat];
//         case "Eliminar":
//             openNotification('bottomLeft', 'TODO comleted');
//             return state.map((todo) => {
//                 if (todo.key === action.dat.key) {
//                     return {
//                         ...todo,
//                         complete: true,
//                     };
//                 } else {
//                     return todo;
//                 }
//             });
//         case "Delete":
//             openNotification('bottomLeft', 'TODO deleted');
//             return state.filter((item) => item.key !== action.dat.key);
//         default:
//             return state;
//     }
    // return state;
// }

// export default createStore(reducerToodo,initial_data); 
// export interface AppState {
//     showMessage: boolean;
// };
// export const initialState: AppState = {
//     showMessage: false,
// };
// export enum EReduxActionTypes{
//     TOGGLE_MESSAGE = "TOGGLE_MESSAGE"
// }
// export interface IReduxBaseAction{
//     type:EReduxActionTypes;
// }
// // =========== Actionssss ======
// export interface IReduxToggleMessageAction extends IReduxBaseAction{
//     type:EReduxActionTypes.TOGGLE_MESSAGE
// }
// export function toggleMessage():IReduxToggleMessageAction{
//     return{ type : EReduxActionTypes.TOGGLE_MESSAGE}
// }