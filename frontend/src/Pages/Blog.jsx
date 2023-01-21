import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Editor from '../Components/Editor';

export default function Blog() {
  const location = useLocation();
  const { id } = location.state;
  const [blog, setBlog] = useState({});
  useEffect(() => {
    const fetchSingleBlog = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_ServerUrl}/${id}`
      );
      setBlog(data);
    };
    fetchSingleBlog();
  }, []);
  return <Editor blog={blog} />;
}
