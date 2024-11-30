import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import './Navbar.css'

function Navbar() {
  const dispatch = useDispatch()
    useEffect(() => {
        async function fetchMyApi() {
            let Myjson = await fetch('data.txt');
            Myjson = await Myjson.json();
            dispatch({
                type: "CARGAR_JSON",
                Myjson
            })
        }
        fetchMyApi();
    }, [dispatch])

  return (
    <div className='Navbar-Header'>
      <Link className='Navbar.logo-container' to="/">
        <img style={{ width: '100%' }} src='./Livell.png' alt='' />
      </Link>
    </div>
  );
}



export default Navbar;