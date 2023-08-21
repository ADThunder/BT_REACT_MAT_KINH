import React, { Component } from 'react'
import "./matKinh.css"
export default class BaiTapMatKinh extends Component {
    arrKinh = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        glasses: {}
    }


    renderGlass = () => {
        return this.arrKinh.map((item, index) => {
            const { url} = item

            return <div key={index}>
                <img onClick={() => {
                    this.setState({
                        glasses :url
                    })
                }} className='p-3' style={{ width: "100px", height: "100px" }} src={url} alt="" />

            </div>

        })
    }


    render() {
        return (
            <div className='bg-matkinh'>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-6">
                            <div className="position-relative">
                                <img className='position-absolute' style={{ width: "250px" }} src="./img/model.jpg" alt="./img/model.jpg" />
                                <img style={{ width: "150px", top: "75px", right: "115px", opacity: "0.7" }} className='position-absolute' src={this.state.glasses} alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <img style={{ width: "250px" }} src="./img/model.jpg" alt="./img/model.jpg" />
                            <img style={{ width: "150px", top: "75px", right: "313px", opacity: "0.7" }} className='position-absolute' src={this.state.glasses} alt="" />
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="bg-light">
                        <div className="d-flex justify-content-center">
                            {this.renderGlass()}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
