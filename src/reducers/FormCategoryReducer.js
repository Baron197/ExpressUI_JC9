const INITIAL_STATE = { loadingAdd: false, statusAdd: '' }

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'Loading_Add' :
            return { 
                ...state, 
                loadingAdd: true,
                statusAdd: '' 
            }
        case 'Add_Selesai' :
            return { 
                ...state, 
                loadingAdd: false, 
                statusAdd: action.payload
            }
        default :
            return state
    }
}