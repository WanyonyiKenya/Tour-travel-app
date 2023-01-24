import React, { Component } from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import {MenuItems} from './MenuItems'

class Nav extends Component {
    state= {clicked:false}
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }
    render (){
        return (
            <nav className='nav'>
                <Link  className='navlogo' to='/'>
                    <h2>MASAFU TRIPS</h2>
                </Link>
                <div className='mobile-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {
                        MenuItems.map((item,i) => 
                           <li key={i}>
                            <Link className={item.cName} to={item.url} >
                                <i className= {item.icon}></i>
                                {item.title}
                            </Link>
                         </li>  
                        )
                    }
                   <button className='sign-btn'>Sign Up</button>
                </ul>
            </nav>
        )
    }
}
export default Nav