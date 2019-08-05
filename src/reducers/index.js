import { combineReducers } from 'redux';
import CategoryListReducer from './CategoryListReducer';
import FormCategoryReducer from './FormCategoryReducer';

export default combineReducers({
    categoryList: CategoryListReducer,
    formCategory: FormCategoryReducer
});