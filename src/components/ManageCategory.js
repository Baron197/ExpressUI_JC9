import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { getListCategory, addCategory, deleteCategory, editCancelCategory } from '../actions';

class ManageCategory extends Component {
    componentDidMount() {
        this.props.getListCategory();
    }

    onBtnAddCatClick = () => {
        this.props.addCategory(this.refs.namaCatAdd.value)
    }

    onBtnDeleteCatClick = (id) => {
        if(window.confirm('Yakin nih bro/sis ?')) {
            this.props.deleteCategory(id)
        }
    }

    onBtnEditCatClick = (id) => {
        this.props.editCancelCategory(id)
    }

    onBtnSaveCatClick = (id) => {

    }

    renderListCategory = () => {
        return this.props.listCategory.map((item) => {
            if(this.props.categoryForm.selectedEditId !== item.id) {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nama}</td>
                        <td><input type="button" value="Edit" onClick={() => this.onBtnEditCatClick(item.id)} /></td>
                        <td>
                            <input type="button" value="Delete" onClick={() => this.onBtnDeleteCatClick(item.id)} />
                        </td>
                    </tr>
                )
            }
            
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td><input type="text" defaultValue={item.nama} ref="namaCatEdit" /></td>
                    <td><input type="button" value="Cancel" onClick={() => this.props.editCancelCategory(0)} /></td>
                    <td>
                        <input type="button" value="Save" onClick={() => this.onBtnSaveCatClick(item.id)} />
                    </td>
                </tr>
            )
        })
    }

    renderButtonAdd = () => {
        if(this.props.categoryForm.loadingAdd) {
            return 'Loading...'
        }
        return <input type="button" value="Add" onClick={this.onBtnAddCatClick} />
    }

    render() {
        return (
            <center>
                <div>
                    <h2>Table Category</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nama</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderListCategory()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td><input type="text" ref="namaCatAdd" /></td>
                                <td>{this.renderButtonAdd()}</td>
                                <td>{this.props.categoryForm.statusAdd}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </center>
        )
    }
}

const mapStateToProps = (state) => {
    return { listCategory: state.categoryList, categoryForm: state.formCategory }
}

export default connect(mapStateToProps, { getListCategory, addCategory, deleteCategory, editCancelCategory })(ManageCategory);