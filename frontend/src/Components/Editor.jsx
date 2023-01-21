import React from 'react';
import { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from '@mantine/core';

function Editor({ blog }) {
  console.log(blog, 'kk');
  const initialValue = '<h2>title</h2>';
  const navigate = useNavigate();
  const [value, onChange] = useState(initialValue);
  useEffect(() => {
    blog && onChange(blog?.value);
  }, [blog]);
  const handleImageupload = (file) => {
    console.log(file);
  };
  const saveItem = () => {
    if (value.trim() === initialValue) return;
    const { data } = axios.post(`${import.meta.env.VITE_ServerUrl}/create`, {
      value,
    });
    navigate('/');
  };
  return (
    <div className=''>
      <div className=' w-1/2 mt-8 mr-auto ml-auto h-screen'>
        <div className='flex'>
          <h1 className='mr-auto ml-auto text-lg font-semibold text-center'>
            Create a Blog
          </h1>

          <button
            onClick={saveItem}
            className='  p-1 py-1  text-white bg-blue-600 rounded'
          >
            save
          </button>
        </div>

        <RichTextEditor
          controls={[
            ['bold', 'italic', 'underline', 'link'],
            ['unorderedList', 'h1', 'h2', 'h3'],
            ['sup', 'sub'],
            ['alignLeft', 'alignCenter', 'alignRight'],
          ]}
          value={value}
          onChange={onChange}
          // onImageUpload={handleImageupload}
          id='rte'
        />
      </div>
    </div>
  );
}

export default Editor;
