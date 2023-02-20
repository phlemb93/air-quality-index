import React, { useContext } from 'react';
import { navbarContents } from '../data/navbarContents';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { countContext } from '../App';


function Navbar() {

  const { count } = useContext(countContext);

  return (
    <div className="navbar">
        <div className="left">
            <h2>flemb</h2>
        </div>

        <div className="right">
            <div className="contents">
                {navbarContents.map(content => (
                    <div className="content" key={content.id}>
                        <div style={{fontSize: '38px'}}>{content.image}</div>
                        <h3>{content.title}</h3>
                    </div>
                ))}
            </div>

            <div className="cart">
            <Badge badgeContent={count} color="primary">
                <ShoppingCartIcon />
            </Badge>

            </div>
        </div>
    </div>
  )
}

export default Navbar