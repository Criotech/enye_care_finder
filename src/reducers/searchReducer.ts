import { HELLO } from '../actions/types';

interface center {
    lat: number,
    lng: number
}

const INITIAL_STATE = {
   center: { lat: 3.22233, lng: 6.585555 }
};

export default (state = INITIAL_STATE, action:any) => {
    switch (action.type) {
        case HELLO:
            return { ...state }
       
        default:
            return state;
    }
}
