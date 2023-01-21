import { NavLink as Nav } from '@mantine/core';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Navlink() {
  const navigate = useNavigate();
  return (
    <>
      <Nav
        onClick={() => navigate('/')}
        className='z-20 mt-10 fixed top-0    left-0 w-64'
        label='Home'
        icon={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='icon icon-tabler icon-tabler-home'
            width='44'
            height='44'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='#2c3e50'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <polyline points='5 12 3 12 12 3 21 12 19 12' />
            <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
            <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
          </svg>
        }
      />
      <Outlet />
    </>
  );
}