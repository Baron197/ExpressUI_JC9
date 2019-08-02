import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getListCategory } from '../actions';

class ManageCategory extends Component {
    componentDidMount() {
        axios.get('http://localhost:1997/category')
        .then((res) => {
            this.props.getListCategory(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    renderListCategory = () => {
        return this.props.listCategory.map((item) => {
            return (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.nama}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>Table Category</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nama</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderListCategory()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { listCategory: state.categoryList }
}

export default connect(mapStateToProps, { getListCategory })(ManageCategory);