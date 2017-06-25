import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Sort.scss';

class Sort extends Component {
  render() {
    return (
      <div className='sort'>
      	<ul>
      		<li className='sort-active'>
            <Link to={{
              search: '?sort=new'
            }}>New</Link>
      		</li>

      		<li>
            <Link to={{
              search: '?sort=best'
            }}>Best</Link>
          </li>

          <li>
            <Link to={{
              search: '?sort=daily'
            }}>Daily</Link>
          </li>
      	</ul>
      </div>
    );
  }
}

export default Sort;