const INITIAL_STATE = { loadingAdd: false, statusAdd: '', selectedEditId: 0 }

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
        case 'Edit_Cancel_Category' :
            return {
                ...state,
                selectedEditId: action.payload
            }
        default :
            return state
    }
}

// var obj = { nama: 'Baron', usia: 22, pekerjaan: 'Guru' }

// var newobj = { ...obj, nama:'Naruto', usia: 17 }
// var newobj = { nama:'Naruto', usia: 17 }