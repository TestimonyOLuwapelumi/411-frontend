import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = [
          axios.get('https://whatisthx411-backrnd.onrender.com/api/videos?populate=*'),
          axios.get('https://whatisthx411-backrnd.onrender.com/api/blogs?populate=*'),
          axios.get('https://whatisthx411-backrnd.onrender.com/api/podcasts?populate=*')
        ];
        const [videosRes, blogsRes, podcastsRes] = await Promise.all(requests);
        setVideos(videosRes.data.data);
        setBlogs(blogsRes.data.data);
        setPodcasts(podcastsRes.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(videos);
  console.log(blogs);
  console.log(podcasts);

  return (
    <div>
      <h1>Videos</h1>
      {videos.map((video) => (
        <div key={video._id}>
          <h2>{video.attributes.videoTitle}</h2>
          <h2>{video.attributes.videoDesc}</h2>
          {/* <p>{video.videoDesc}</p> */}
        </div>
      ))}

      {/* <h1>Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}

      <h1>Podcasts</h1>
      {podcasts.map((podcast) => (
        <div key={podcast._id}>
          <h2>{podcast.title}</h2>
          <p>{podcast.description}</p>
        </div>
      ))} */}
    </div>
  );
};

export default App;
