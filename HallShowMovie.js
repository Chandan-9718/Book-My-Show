import React, { useEffect, useState } from 'react';
import './HallShowMovies.css';
import '../MainNavbar/MainNavbar.css';

import { Button } from 'antd';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookOnlineIcon from '@mui/icons-material/BookOnline';

import Navbar from '../MainNavbar/Navbar';
import { Link, useLocation } from 'react-router-dom';

import axios from 'axios';


function HallShowMovies() {

    const location = useLocation();
    const { movieId, title, language, format, poster } = location.state;
  
     
    const dateArray = [{date_formate: '2022-11-22'}, {date_formate: '2022-11-25'}];



    const [date_formate, setDate_formate] = useState(dateArray[0].date_formate);

    const [selected_seat, setselected_seat] = useState(1);

    const [theatreList, setTheatreList] = useState([]);
    const [city_Id, setCity_Id] = useState(1);
    
    
const GetTheatreList = async(cityId, movieId, date) => {
	// try {
	// 	let response =  await axios.get(`/theater/cityMovieDate?cityId=${cityId}&movieId=${movieId}&date=${date}`);
	// 	// console.log("******Theaters***", response);
	// 	return response;
	// }
	// catch (error) {
	// 	console.log(error);
	// }
}

const GetShowsByTheatre = async(theatreId, movieId, date) => {
	// try {
	// 	let response =  await axios.get(`/show/theaterMovieDate?theaterId=${theatreId}&movieId=${movieId}&date=${date}`);
	// 	// console.log("******Shows***", response);
	// 	return response;
	// }
	// catch (error) {
	// 	console.log(error);
	// }
}

       
    useEffect(() => {
        const fetchTheatres = async() =>{
        //   const response = await GetTheatreList(city_Id, movieId, date_formate);
        const response = {data: "12"}
          const temp = response.data;
            let finalTheatreList = [];
            setTheatreList([]);
            
            

            temp.map(async(field) =>{
                    let theatreId = 0;
                    let theatreName = "";
                    let address = "";
                    let timings = [];

                    const temp = field.split(',');

                    // const showResponse = await GetShowsByTheatre(parseInt(temp[0]), movieId, date_formate);
                    const showResponse =  {data:"123"}
                    console.log("show response %$^%$^%^$ for date",date_formate," : ",showResponse.data);
                    timings = showResponse.data;

                    let finalTimings = [];

                    timings.map(field => {
                        let temp1 = field.split(',');
                        let obj = {showId : temp1[0], timing:temp1[1]};
                        finalTimings.push(obj);
                    })

                    finalTheatreList.push({
                        theatreId : parseInt(temp[0]),
                        theatreName : temp[1],
                        address : temp[2],
                        timings: finalTimings,
                    });

                    setTheatreList(finalTheatreList);
                }
            )
      }
      fetchTheatres();
    }, [date_formate]);


    return (<>

        {/* <Navbar></Navbar> */}

        <div className='HallShowMovies'>

          <div className='HallShowMoviesNavBarParent'>
            <div className="HallShowMoviesNavBar">
                <div className="HallShowMoviesNavBarTop">
                    <a href="" className="HallShowMoviesNavBarTop0">{title}</a>
                    <a href="" className="HallShowMoviesNavBarTop0">-</a>
                    <a href="" className="HallShowMoviesNavBarTop0">{language}</a>

                </div>
                <div className="HallShowMoviesNavBarBottom">
                    <span className="HallShowMoviesNavBarBottom0">{format}</span>
                    <span className="HallShowMoviesNavBarBottom0">HORROR</span>
                </div>
            </div>
       </div>

            <div className='HalltimefilterforDate'>
                {dateArray.map((dateArray, index) => {
                    return (
                        <Button className="MovieTimingInOneTheaterBtn"
                               style={date_formate === dateArray.date_formate ?
                                { background: "#f84464", borderRadius: "10px", border: "1px solid #f84464", color: "#fff", } :
                                { background: "#fff", borderRadius: "10px", border: "1px solid #f84464", color: "#f84464", }}
                               
                                value={dateArray.date_formate}
                                onClick={() =>{setDate_formate(dateArray.date_formate);}}>
                               {dateArray.date_formate}</Button>
                    )
                })}
            </div>
          
           

            <div className='HallNameShowMoviestimingPage'>
            { date_formate=== dateArray[0].date_formate ? <>

            <span className='HallShowMoviesticketSymbol'>
            <div className='HallNameShowMovies'>
            <FavoriteBorderIcon style={{ color: "#999", marginRight: "10px" }} />PVR : Centre city, NOIDA</div>
              <BookOnlineIcon />M-Ticket</span>
              
            <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                            
                                          Hall_Name: "PVR",
                                          Hall_Address: "Centre city, NOIDA", 
                                            // Hall_Name: "theatreListnametiming.theatreName",
                                            // Hall_Address: "theatreListnametiming.address", 
                                            total_seat: selected_seat,
                                           

                                            // alltiming: JSON.stringify(theatreListnametiming.timings),
                                            // alltiming: "theatreListnametiming.timings",
                                            Selected_time: "03:30 P.M",
                                            // alltiming: "theatreListnametiming.timings",
                                            // Selected_time: "Showtimings.timing",
                                            // Selected_date: date_formate,
                                            Selected_date :"22-11-2022",
                                            
                                            //  showId:Showtimings.showId, 
                                            showId: 2,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >03:30 P.M</Button>
                                    </Link>

                                    <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "PVR",
                                          Hall_Address: "Centre city, NOIDA", 
                                          total_seat: selected_seat,
                                           Selected_time: "07:30 P.M",
                                            Selected_date :"22-11-2022",
                                            showId: 2,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >07:30 P.M</Button>
                                    </Link>

                                    <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "PVR",
                                          Hall_Address: "Centre city, NOIDA", 
                                          total_seat: selected_seat,
                                           Selected_time: "11:00 P.M",
                                            Selected_date :"22-11-2022",
                                            showId: 2,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >11:00 P.M</Button>
                                    </Link>

              <span className='HallShowMoviesticketSymbol'>
            <div className='HallNameShowMovies'>
            <FavoriteBorderIcon style={{ color: "#999", marginRight: "10px" }} />Sky : Dwarika sector, Delhi</div>
              <BookOnlineIcon />S-Ticket</span>
              
            <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "Sky",
                                          Hall_Address: " Dwarika sector, Delhi",
                                            total_seat: selected_seat,
                                            Selected_time: "04:30 P.M",
                                            Selected_date :"22-11-2022",
                                            showId: 3,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >04:30 P.M</Button>
                                    </Link>

                                    <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "Sky",
                                          Hall_Address: " Dwarika sector, Delhi", 
                                          total_seat: selected_seat,
                                           Selected_time: "09:30 P.M",
                                            Selected_date :"22-11-2022",
                                            showId: 3,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >09:30 P.M</Button>
                                    </Link>

            <span className='HallShowMoviesticketSymbol'>
            <div className='HallNameShowMovies'>
            <FavoriteBorderIcon style={{ color: "#999", marginRight: "10px" }} />Robot :  sector-24, south Delhi</div>
              <BookOnlineIcon />S-Ticket</span>
              
            <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "Robot",
                                          Hall_Address: "sector-24, south Delhi",
                                            total_seat: selected_seat,
                                            Selected_time: "02:30 P.M",
                                            Selected_date :"22-11-2022",
                                            showId: 4,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >02:30 P.M</Button>
                                    </Link>

                                    <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "Robot",
                                          Hall_Address: "sector-24, south Delhi", 
                                          total_seat: selected_seat,
                                           Selected_time: "05:30 P.M",
                                            Selected_date :"22-11-2022",
                                            showId: 4,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >05:30 P.M</Button>
                                    </Link>

                                    <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "Robot",
                                          Hall_Address: "sector-24, south Delhi", 
                                          total_seat: selected_seat,
                                           Selected_time: "09:00 P.M",
                                            Selected_date :"22-11-2022",
                                            showId: 4,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >09:00 P.M</Button>
                                    </Link>

                                    <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "Robot",
                                          Hall_Address: "sector-24, south Delhi", 
                                          total_seat: selected_seat,
                                           Selected_time: "12:30 P.M",
                                            Selected_date :"22-11-2022",
                                            showId: 5,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >12:30 P.M</Button>
                                    </Link>

                                    <span className='HallShowMoviesticketSymbol'>
            <div className='HallNameShowMovies'>
            <FavoriteBorderIcon style={{ color: "#999", marginRight: "10px" }} />SURYA : Vanarasi, U.P</div>
              <BookOnlineIcon />S-Ticket</span>
              
            <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                           Hall_Name: "SURYA",
                                          Hall_Address: " Vanarasi, U.P",
                                            total_seat: selected_seat,
                                            Selected_time: "06:30 P.M",
                                            Selected_date :"22-11-2022",
                                            showId: 6,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >06:30 P.M</Button>
                                    </Link>



                                    <span className='HallShowMoviesticketSymbol'>
            <div className='HallNameShowMovies'>
            <FavoriteBorderIcon style={{ color: "#999", marginRight: "10px" }} />Lui : Kasha, NOIDA</div>
              <BookOnlineIcon />M-Ticket</span>
              
            <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "Lui",
                                          Hall_Address: "Kasha, NOIDA", 
                                            total_seat: selected_seat,
                                            Selected_time: "03:30 P.M",
                                            Selected_date :"22-11-2022",
                                            showId: 7,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >03:30 P.M</Button>
                                    </Link>

                                    <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "Lui",
                                          Hall_Address: "Kasha, NOIDA", 
                                          total_seat: selected_seat,
                                           Selected_time: "07:30 P.M",
                                            Selected_date :"22-11-2022",
                                            showId: 7,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >07:30 P.M</Button>
                                    </Link>

                                    <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "Lui",
                                          Hall_Address: "Kasha, NOIDA", 
                                          total_seat: selected_seat,
                                           Selected_time: "11:00 P.M",
                                            Selected_date :"22-11-2022",
                                            showId: 2,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >11:00 P.M</Button>
                                    </Link>


                                 </>
                                :
                                 <>
                                 
                                 <span className='HallShowMoviesticketSymbol'>
            <div className='HallNameShowMovies'>
            <FavoriteBorderIcon style={{ color: "#999", marginRight: "10px" }} />Robot :  sector-24, south Delhi</div>
              <BookOnlineIcon />S-Ticket</span>
              
            <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "Robot",
                                          Hall_Address: "sector-24, south Delhi",
                                            total_seat: selected_seat,
                                            Selected_time: "02:30 P.M",
                                            Selected_date :"25-11-2022",
                                            showId: 4,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >02:30 P.M</Button>
                                    </Link>

                                    <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "Robot",
                                          Hall_Address: "sector-24, south Delhi", 
                                          total_seat: selected_seat,
                                           Selected_time: "05:30 P.M",
                                            Selected_date :"25-11-2022",
                                            showId: 4,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >05:30 P.M</Button>
                                    </Link>

                                    <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "Robot",
                                          Hall_Address: "sector-24, south Delhi", 
                                          total_seat: selected_seat,
                                           Selected_time: "09:00 P.M",
                                            Selected_date :"25-11-2022",
                                            showId: 4,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >09:00 P.M</Button>
                                    </Link>

                                    <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "Robot",
                                          Hall_Address: "sector-24, south Delhi", 
                                          total_seat: selected_seat,
                                           Selected_time: "12:30 P.M",
                                            Selected_date :"25-11-2022",
                                            showId: 5,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >12:30 P.M</Button>
                                    </Link>

                                    <span className='HallShowMoviesticketSymbol'>
            <div className='HallNameShowMovies'>
            <FavoriteBorderIcon style={{ color: "#999", marginRight: "10px" }} />SURYA : Vanarasi, U.P</div>
              <BookOnlineIcon />S-Ticket</span>
              
            <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                           Hall_Name: "SURYA",
                                          Hall_Address: " Vanarasi, U.P",
                                            total_seat: selected_seat,
                                            Selected_time: "06:30 P.M",
                                            Selected_date :"25-11-2022",
                                            showId: 6,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >06:30 P.M</Button>
                                    </Link>



                                    <span className='HallShowMoviesticketSymbol'>
            <div className='HallNameShowMovies'>
            <FavoriteBorderIcon style={{ color: "#999", marginRight: "10px" }} />Lui : Kasha, NOIDA</div>
              <BookOnlineIcon />M-Ticket</span>
              
            <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "Lui",
                                          Hall_Address: "Kasha, NOIDA", 
                                            total_seat: selected_seat,
                                            Selected_time: "03:30 P.M",
                                            Selected_date :"25-11-2022",
                                            showId: 7,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >03:30 P.M</Button>
                                    </Link>

                                    <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "Lui",
                                          Hall_Address: "Kasha, NOIDA", 
                                          total_seat: selected_seat,
                                           Selected_time: "07:30 P.M",
                                            Selected_date :"25-11-2022",
                                            showId: 7,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >07:30 P.M</Button>
                                    </Link>

                                    <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                          title : title,
                                          Hall_Name: "Lui",
                                          Hall_Address: "Kasha, NOIDA", 
                                          total_seat: selected_seat,
                                           Selected_time: "11:00 P.M",
                                            Selected_date :"25-11-2022",
                                            showId: 2,

                                        }}
                                        >
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >11:00 P.M</Button>
                                    </Link>

                                 </>
                                 }    

                {/* {theatreList.map((theatreListnametiming) => {

                    // console.log("this is all hall and their timing inside showmalltimefilter function" + theatreListnametiming);

                     return (
                    <div className='HallNameShowMoviestiming'>
                        <div className='HallNameShowMovies'>
                            <FavoriteBorderIcon style={{ color: "#999", marginRight: "10px" }} />{theatreListnametiming.theatreName}:{theatreListnametiming.address}, NOIDA</div>
                        <div className='HallShowMoviestime'>
                            <span className='HallShowMoviesticketSymbol'>
                                <BookOnlineIcon />M-Ticket</span>
                                     
                            {theatreListnametiming.timings.map((Showtimings) => {

                                    // console.log("this is show time for one theater " + Showtimings.timing);

                                return (
                                    <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
                                        state={{
                                            title: title,
                                            poster:poster,

                                            Hall_Name: theatreListnametiming.theatreName,
                                            Hall_Address: theatreListnametiming.address, 
                                            total_seat: selected_seat,

                                            alltiming: JSON.stringify(theatreListnametiming.timings),

                                            Selected_time: Showtimings.timing,
                                            Selected_date: date_formate,
                                            
                                             showId:Showtimings.showId, 

                                        }}>
                                        <Button className="MovieTimingInOneTheaterBtn"
                                            style={{ background: "white", color: "#2dc492" }}
                                        >{Showtimings.timing}</Button>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                )
            })} */}
            </div>

        </div>
    </>)
}

export default HallShowMovies;












//For Dummy example


//Array of theater;
// import HallNameAndTiming from '../AllArray/HallNameAndTimingArray';


//  function ShowHallArray(date_formate) {

//     //To get All theater for particular movie on particular date; 
//     fetch(`/theater/cityMovieDate?cityId=${city_Id}&movieId=${movieId}&date=${date_formate}`)
//         .then((response) => response.json())
//         .then((json) => {
//          let newMovieArray = json;

 //     // console.log("This is all hall present on selected date for selected movie_id in city city_id " + json);
//          setDisplayHallArray(newMovieArray);
//      });
//    }


 // function ShowHallArrayAndshowTime(theaterId, date_formate) {

    //     //To get All show time for each theater for particular movie on particular date;
    //        fetch(`/show/theaterMovieDate?theaterId=${theaterId}&movieId=${movieId}&date=${date_formate}`)
    //       .then((response) => response.json())
    //       .then((json) => {
    //         let newHallArray = json;

    //         console.log("This is All show time for all theater  " + json);
    //         setDisplayHallArrayShowtime(newHallArray);
    //       });
    // }

//    useEffect(() => {
//         ShowHallArray();
//     }, []);



// const [halltimefilter, setHalltimefilter] = useState( 

            
        // HallNameAndTiming[0].moviewatchingdateavailability.map((Hallnametiming, index) => {
        //     return (
        //         <div className='HallNameShowMoviestiming'>
        //             <div className='HallNameShowMovies'>
        //                 <FavoriteBorderIcon style={{ color: "#999", marginRight: "10px" }} />{Hallnametiming.hallname}</div>
        //             <div className='HallShowMoviestime'>
        //                 <span className='HallShowMoviesticketSymbol'>
        //                     <BookOnlineIcon />M-Ticket</span>
        //                 {Hallnametiming.hallshowtiming.map((timing, index) => {
        //                     return (
        //                         <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
        //                             state={{
        //                                 title: title,
        //                                 Hall_Name: Hallnametiming.hallname,
        //                                  Selected_time: timing.showtimeingmovies,
        //                                 Selected_date: date_formate,
        //                                 total_seat: selected_seat,
        //                                 alltiming: JSON.stringify(Hallnametiming.hallshowtiming),
        //                                 poster: poster,
        //                                 showId: 352,
        //                             }}>
        //                             <Button className="MovieTimingInOneTheaterBtn"
        //                                 style={{ background: "white", color: "#2dc492" }}
        //                             >{timing.showtimeingmovies}</Button>
        //                         </Link>
        //                     )
        //                 })}
        //             </div>
        //         </div>
        //     )
        // })
    

    // );


// onClick={() => { showmalltimefilter(dateArray.date_formate, HallNameAndTiming, index) }}
                              


// DisplayHallArray.map((Hallnametiming, index) => {
                    // let Hallarr=Hallnametimin.split(",");
                //  console.log((Hallarr));
                //   ShowHallArrayAndshowTime(Hallarr[0]);
//                 
                    //  return (
//                     <div className='HallNameShowMoviestiming'>
//                         <div className='HallNameShowMovies'>
//                             <FavoriteBorderIcon style={{ color: "#999", marginRight: "10px" }} />{Hallarr[1]}:{Hallarr[2]}: NOIDA</div>
//                         <div className='HallShowMoviestime'>
//                             <span className='HallShowMoviesticketSymbol'>
//                                 <BookOnlineIcon />M-Ticket</span>
                                     
//                             {DisplayHallArrayShowtime.map((DisplayHallArrayShowtime, index) => {
                                                // let Timearr=DisplayHallArrayShowtime.split(",");
                //  console.log((Timearr));
//                                 return (
//                                     <Link to="/movie-details/Hall-name_and_date-time/MallSeatMatrix"
//                                         state={{
//                                             title: title,
//                                             Hall_Name: Hallarr[1],
//                                             Selected_time: Timearr[1],
//                                             Selected_date: DisplayHallArrayShowtime.date,
//                                             total_seat: selected_seat
//                                         }}>
//                                         <Button className="MovieTimingInOneTheaterBtn"
//                                             style={{ background: "white", color: "#2dc492" }}
//                                             onClick={()=>{ShowHallArray(DisplayHallArrayShowtime.date)}}
//                                         >{DisplayHallArrayShowtime.timing}</Button>
//                                     </Link>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 )
//             })



