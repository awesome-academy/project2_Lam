import React, { Component } from 'react'
import ImgPanner1 from '../../IMG/hoa-panner1.png'
import ImgPanner2 from '../../IMG/hoa-panner2.png'
import { connect } from 'react-redux'
import { ToPageCart } from '../../../store/action/action'
import { BrowserRouter as Router, Link } from "react-router-dom";

class header extends Component {

    toCartPage = () => {
        this.props.RedirecCard()
    }
    render() {
        return (
            <header>
                <div className="action " >
                    <ul className="action__ul ">
                        <li className="li-1">
                            <p className="li-p1">Green Shop</p>
                            <p className="li-p2">Món quà từ thiên nhiên</p>
                        </li>
                        <li className="li-2">
                            <div className="divImg"><img className="img1" src={ImgPanner1} alt="" /><img className="img2" src={ImgPanner2} alt="" /></div>
                        </li>
                        <li className="li-3">
                            <p>Hỗ trợ : (04) 6674 2332 - (04) 3786 8904</p>
                            <div className="search">
                                <form action="true" method="get">
                                    <input className="text" /><img src="../../../IMG/icon-search.png" alt="" />
                                </form>
                            </div>
                        </li>
                        <li className="li-4">
                            <Link to="/cart"> 
                            <p className="li-4-p"> 0 Sản phẩm &nbsp;&nbsp;&nbsp;&nbsp;
                             <img src="../../../IMG/icon-Gio-Hang.png" alt="" />
                              </p>
                              </Link> 
                            </li>
                        </ul>
                    </div>
                </header>
                );
            }
        }
const mapStateToProps = (state) => {
    return {listproHot: state.ProductReducer }
            }
const mapDispatchToProps = (dispatch) =>{
    return {
                    RedirecCard : () =>{
                    dispatch(ToPageCart())
                }
                }
            }
            
export default connect(mapStateToProps,mapDispatchToProps) (header);