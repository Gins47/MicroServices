//import React, { useState, useEffect } from 'react';
import React from 'react';
//import axios from 'axios';

export default ({ comments }) => {

  /*
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
      console.log(`Inside comment list ${postId}`)
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setComments(res.data);
    console.log(JSON.stringify(comments))
  };

  useEffect(() => {
    fetchData();
  }, []);
*/
  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};