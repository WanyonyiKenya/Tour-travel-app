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
                <h1 className='navlogo'>MASAFU TRIPS</h1>
                <div className='mobile-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {
                        MenuItems.map((item,i) => 
                           <li key={i}>
                            <a className={item.cName} href={item.url} >
                                <i className= {item.icon}></i>
                                {item.title}
                            </a>
                         </li>  
                        )
                    }
                   <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}
export default Nav