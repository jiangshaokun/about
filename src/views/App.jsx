require('normalize.css/normalize.css')
require('styles/App.less')

import React from 'react'
import NavLink from '../components/NavLink'

class App extends React.Component {
  render () {
    return (
      <div className='content'>
        <ul className='nav'>
          <li>
            <NavLink to='/tuzhan' onlyActiveOnIndex>
              兔展项目
            </NavLink>
          </li>
          <li>
            <NavLink to='/xingdian'>
              形点项目
            </NavLink>
          </li>
          <li>
            <NavLink to='/resume'>
              个人简历
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact'>
              联系方式
            </NavLink>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

App.defaultProps = {}

export default App
