import React, { useState } from "react";
import PostCreater from "./newpostcss";
import { useDispatch, useSelector } from "react-redux";
import { createnewpost } from "../../Actions/post";
// import Loading from '../../Commponents/Loader/Loading'
import TextareaAutosize from "react-textarea-autosize";
import{BiImageAdd } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";
import { Box, LinearProgress } from "@mui/material";

function NewPost() {
  const { user } = useSelector((s) => s.mainreducer);
  const { createpostloading } = useSelector((state) => state.postreducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState();
  const [imgpreview, setImgpreview] = useState();

  const nepost = async () => {
    console.log(file);
    await dispatch(createnewpost(caption, file, navigate));
    setImgpreview();
    setFile();
    setCaption("");
  };
  const changehandle = async (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    // const formData = new FormData();
    // formData.append('file', file);
    setFile(e.target.files[0]);
    setImgpreview(url);
  };
//   const removephoto = () => {
//     setImgpreview();
//     setFile();
//   };
  return (
    <PostCreater>
      <div className="subcontainer">
        <div className="newpostcard">
          <div>
            <h4>
              Hello <b className="username"> {user.name.toUpperCase()} </b>
            </h4>
          </div>
          <div>
            {imgpreview && (
              <img src={imgpreview} className="post-image" alt="post " />
            )}
            
          </div>
          <div>
            <label htmlFor="postimg" className=" df ac w50 jc globalbtn cp">
              <BiImageAdd size={20}/>
              {file ? "Change Image" : "Add Image"}
              {/* {file && <button onClick={removephoto} className="globalbtn">Remove</button>} */}
            </label>
            <input
              type="file"
              name="postimg"
              id="postimg"
              onChange={changehandle}
              className="costomfileinput"
              accept="image/png, image/jpeg,image/jpg,image/JPG "
              capture
              
            />
          </div>
        
          <div>
            <TextareaAutosize
              type="text"
              className="input"
              placeholder="Share Your Thoghts Here"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>

          <div className="btns">
            {createpostloading && (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            )}
            <button
              className="btn"
              onClick={() => nepost()}
              disabled={!file || createpostloading ? true : false}
            >
              {createpostloading ? "Posting.." : "Post"}
            </button>
          </div>
        </div>
      </div>
    </PostCreater>
  );
}

export default NewPost;
