import axios from 'axios';

export const getListCategory = () => {
    return (dispatch) => {
        axios.get('http://localhost:1997/category')
        .then((res) => {
            dispatch({
                type: 'ISI_CATEGORY_LIST',
                payload: res.data
            })
        })
        .catch((err) => {
            console.log(err)
        })    
    }
}

export const addCategory = (cat) => {
    return (dispatch) => {
        dispatch({ type: 'Loading_Add' })
        axios.post('http://localhost:1997/category', {
            nama: cat
        }).then((res) => {
            dispatch({
                type: 'ISI_CATEGORY_LIST',
                payload: res.data
            })
            dispatch({
                type: 'Add_Selesai',
                payload: 'Add Berhasil!'
            })
        }).catch((err) => {
            console.log(err)
            dispatch({
                type: 'Add_Selesai',
                payload: 'Add Gagal!'
            })
        })
    }
}

// var contoh = () => {
//     return (test) => {
//         test('hello')
//     }
// }

// var a = contoh
// var b = contoh()
// b(console.log)
