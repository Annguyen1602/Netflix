import axios from "axios";
import React, { useEffect, useState } from "react";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Movie from "./Movie";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  console.log(movies);

  return (
    <>
      <h1 className="text-white font-bold md:text-xl p-4">{title}</h1>
      <div className="relative flex items-center ">
        <MdChevronRight size={40} className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer "/>
        <div id={"slider"} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => (
            <Movie item={item} key={id}/>
          ))}
        </div>
        <MdChevronLeft size={40} className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer"/>
      </div>
    </>
  );
};

export default Row;
