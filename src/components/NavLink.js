/**
 * Created by jiangshaokun on 16/7/30.
 */
// components/NavLink.js
import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return <Link {...this.props} className="nav-link" activeClassName="active"/>
  }
})
