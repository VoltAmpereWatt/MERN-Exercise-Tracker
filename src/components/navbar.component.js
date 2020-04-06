import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    render () {
        // navbar from boostrap documentation
        return (
					<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          {/* link instead of anchor tag from react-router. 'to' param shows where it links to.*/}
						<Link to="/" className="navbar-brand">ExcerTracker</Link>
							<div className="navbar-collapse">
                <ul className='navbar-nav mr-auto'>
                  <li className='navbar-item'><Link to='/' className='nav-link'>Exercises</Link></li>
                  <li className='navbar-item'><Link to='/create' className='nav-link'>Create Exercise Log</Link></li>
                  <li className='navbar-item'><Link to='/user' className='nav-link'>Create User</Link></li>
                </ul>
              </div>
            </nav>
        );
    }
}