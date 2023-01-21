import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../Components/Editor';
import View from '../Components/View';

function Home() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_ServerUrl}`);
      console.log(data);
      setBlogs(data);
    };
    fetchData();
  }, []);
  return (
    <div className='flex justify-center mt-10 flex-wrap gap-10 '>
      {blogs.map((blog) => {
        return <View blog={blog} />;
      })}
      <button onClick={() => navigate('/create')}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='icon icon-tabler icon-tabler-square-plus'
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
          <rect x='4' y='4' width='16' height='16' rx='2' />
          <line x1='9' y1='12' x2='15' y2='12' />
          <line x1='12' y1='9' x2='12' y2='15' />
        </svg>
      </button>
    </div>
  );
}

export default Home;
