import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext'

import './View.css';
function View() {
  const [userDetails, setUserDetails] = useState({})
  const { postDetails } = useContext(PostContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    console.log(postDetails);
    const { owner } = postDetails
    console.log(owner,'W4lSx83v9LONVsFi5VkZy6rstJf1');
    firebase.firestore().collection('users').where('id', '==', owner ).get().then((response) => {
      console.log(response);
      response.forEach(doc => {
        setUserDetails(doc.data())
        console.log(doc.data()
        )
      })
    })
  }, [postDetails, firebase])
  useEffect(() => {
    console.log(userDetails)
  }
    , [userDetails]);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.image}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}

      </div>
    </div>
  );
}
export default View;
