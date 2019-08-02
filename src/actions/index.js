import axios from 'axios';

export const getListCategory = (arr) => {
    return {
        type: 'ISI_CATEGORY_LIST',
        payload: arr
    }
}