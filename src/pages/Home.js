import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutInitiate, getDataStart } from "./../redux/action";
const Home = () => {
  const [search,setSearch] = useState('')
  const [movie,setMovie] = useState()
  const dispatch = useDispatch();
  const { currentUser,data } = useSelector((state) => state.user);
  console.log(data)
  const handleChange = () => {
    dispatch(logoutInitiate());
  };
  useEffect(() => {
    dispatch(getDataStart({search:search}));
  }, []);

  useEffect(()=>{
    setMovie(data)
  },[data])

  const handleChangeSubmitted = () => {
    dispatch(getDataStart({search:search}));
  }
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h1>Welcome to Home</h1>
        <button type="button" class="btn btn-danger" onClick={handleChange}>
          Logout
        </button>
      </div>

      <div style={{marginLeft: "220px",marginRight: "220px",marginTop: "20px"}}>
        <div class="form-group">
          <input
            type="text"
            class="form-control m-10"
            id="search"
            placeholder="Enter Search Item"
            onChange={e=>setSearch(e.target.value)}
          />
        </div>
        <button type="button" class="btn btn-danger" onClick={handleChangeSubmitted}>
          Get Movie
        </button>

        {movie && 
          <div style={{display: 'flex',marginTop:'100px'}}>
            <div>
            <img src={movie.Poster} alt="alt" style={{width: '400px', height: '300px'}}/>
            </div>
             <div >
             <h6> Name : {movie.Title} </h6><br/>
             <h6 style={{marginLeft:'200px'}}>Actor : {movie.Actors}</h6><br/>
             <h6>Rating : {movie.imdbRating}</h6><br/>
             <h6> Country : {movie.Country} </h6><br/>
             <h6 >Released : {movie.Released}</h6><br/>
             <h6>Runtime : {movie.Runtime}</h6><br/>
             
             </div>
          </div>
        }

      </div>
    </div>
  );
};

export default Home;
