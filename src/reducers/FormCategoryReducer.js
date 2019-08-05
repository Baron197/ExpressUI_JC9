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

// var obj = { nama: 'Baron', usia: 22, pekerjaan: 'Guru' }

// var newobj = { ...obj, nama:'Naruto', usia: 17 }
// var newobj = { nama:'Naruto', usia: 17 }