import { useEffect, useState } from 'react';
import CustomHelmet from '../../Compnents/CustomHelmet/CustomHelmet';
import HeroBlog from './HeroBlog/HeroBlog';
import axios from 'axios';
import BlogBody from './BlogBody/BlogBody';
import LoadingBar from 'react-top-loading-bar';

const Blogs = () => {
  const [blog, setBlog] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/everything?q=movies&apiKey=77c7fc016d2c431393b3acc6d0c685a3'
      );
      setBlog(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <LoadingBar />
      <CustomHelmet title="Blog" />
      <HeroBlog />
      <BlogBody blog={blog} />
    </>
  );
};

export default Blogs;
