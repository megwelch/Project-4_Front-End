// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Form from 'react-bootstrap'
// import ShowResults from './ShowResults'

// const ShowSearch = () => {

//     const [data, setData] = useState(null)
//     const [error, SetError] = useState(null)
//     const [isSubmitted, setIsSubmitted] = useState(false)







//     return(
//         <>

//             <ShowResults data={data} error={error}/>
//         </>
//     )
// }

// export default ShowSearch

// let url= "https://api.tvmaze.com/search/shows?q=girls"
// const [data, setData] = useState([]);
// const [isLoading, setIsLoading] = useState(false);
// const [err, setErr] = useState("");

// const handleClick = async () => {
//     try {
//         const response = await fetch("https://api.tvmaze.com/search/shows?q=girls", {
//           method: "GET",
//           headers: {
//             Accept: "application/json;charset=utf-8",
//           },
//         });
  
//         if (!response.ok) {
//           throw new Error(`Error! status: ${response.status}`);
//         }
  
//         const result = await response.json();
//         console.log('result', result[0].show.name)
//         setData(result);
//       } catch (err) {
//         setErr(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//       console.log({data})
// }
