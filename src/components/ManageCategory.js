import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getListCategory, addCategory } from '../actions';

class ManageCategory extends Component {
    componentDidMount() {
        this.props.getListCategory();
    }

    onBtnAddCatClick = () => {
        this.props.addCategory(this.refs.namaCatAdd.value)
    }

    renderListCategory = () => {
        return this.props.listCategory.map((item) => {
            return (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.nama}</td>
                    <td><input type="button" value="Edit" /></td>
                    <td><input type="button" value="Delete" /></td>
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

export default connect(mapStateToProps, { getListCategory, addCategory })(ManageCategory);