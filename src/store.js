import { configureStore } from '@reduxjs/toolkit';

var list = [
    {
        "id": 0,
        "url": 'fondo.png',
        "title1": 'Health & Wellness',
        "p1": 'web designer/',
        "p2": 'Show me more',
        "button": 'no',
    }
];

const initialState = {

    lista: list,
    orden: 0,
    clase: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CARGAR_JSON':{
            return { ...state, 
                lista: action.Myjson, 
            }
        }
        case 'SCROLL_ABAJO': {
            return {
                ...state,
                orden: action.orden,
                clase: 'Abajo'
            }
        }
        case 'SCROLL_ARRIBA': {
            return {
                ...state,
                orden: action.orden,
                clase: 'Arriba'
            }
        }
        default: {
            return state
        }
    }
}

const store = configureStore({
    reducer: reducer,
  });
  
export default store;