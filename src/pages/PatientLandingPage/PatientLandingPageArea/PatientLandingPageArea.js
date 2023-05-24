// import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import Sidebar from '../../../components/Shared/Sidebar/Sidebar';
// import useGlobalContext from "../../../hooks/useGlobalContext";
// //import './patientlandingpagearea.css'

// function PatientLandingPageArea() {
//   const [patientData, setPatientData] = useState(null);
//   const [bookingData, setBookingData] = useState([]);

//   useEffect(() => {
//     // Fetch booking data here
//     const fetchBookingData = async () => {
//       try {
//         const response = await fetch("http://65.2.132.105:8004/reviews/:procedureId");
//         const data = await response.json();
//         setBookingData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchBookingData();
//   }, []);

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const { stickyMenu } = useGlobalContext();

//   const handleSearch = () => {};

//   return (
//     <div>
//       <form
//         action={handleSearch}
//         style={{ display: "flex", justifyContent: "center" }}
//       >
//         <div
//           style={{ padding: "1px", width: "500px", marginTop: "30px" }}
//           className="bg-light p-2 rounded rounded-pill shadow-sm mb-4"
//         >
//           <div className="input-group">
//             <input
//               type="search"
//               placeholder="Search Procedures.."
//               aria-describedby="button-addon1"
//               style={{ height: "40px", fontSize: "14px" }}
//               className="form-control border-0 bg-light p-2 rounded rounded-pill"
//             />
//             <div className="input-group-append">
//               <button
//                 id="button-addon1"
//                 type="submit"
//                 className="btn btn-link text-primary btn-sm"
//               >
//                 <i className="fa fa-search"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>

//       <div className="booking-history-container">
//         <h2 style={{ textAlign: "center" }}>Booking History</h2>

//         {bookingData.length > 0 ? (
//           <div
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               justifyContent: "center",
//             }}
//           >
//             {bookingData.map((booking) => (
//               <div
//                 key={booking.id}
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "10px",
//                   margin: "10px",
//                   width: "300px",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   borderRadius: "8px",
//                   backgroundColor: "lightblue",
//                   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//                 }}
//               >
//                 <p>
//                   <strong>Procedure Name:</strong> {booking.name}
//                 </p>
//                 <p>
//                   <strong>Status:</strong> {booking.email}
//                 </p>
//                 <p>
//                   <strong>Date:</strong> {booking.booking_date}
//                 </p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="no-booking-history" style={{ textAlign: "center" }}>
//             No booking history found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default PatientLandingPageArea;

import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Sidebar from '../../../components/Shared/Sidebar/Sidebar';
import useGlobalContext from "../../../hooks/useGlobalContext";
//import './patientlandingpagearea.css'

function PatientLandingPageArea() {
  const [patientData, setPatientData] = useState(null);
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    // Fetch booking data here
    const fetchBookingData = async () => {
      try {
        const response = await fetch("http://65.2.132.105:8080/patient/1");
        const data = await response.json();
        setBookingData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookingData();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { stickyMenu } = useGlobalContext();

  const handleSearch = () => {};

  return (
    <div>
      <form
        action={handleSearch}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          style={{ padding: "1px", width: "500px", marginTop: "30px" }}
          className="bg-light p-2 rounded rounded-pill shadow-sm mb-4"
        >
          <div className="input-group">
            <input
              type="search"
              placeholder="Search Procedures.."
              aria-describedby="button-addon1"
              style={{ height: "40px", fontSize: "14px" }}
              className="form-control border-0 bg-light p-2 rounded rounded-pill"
            />
            <div className="input-group-append">
              <button
                id="button-addon1"
                type="submit"
                className="btn btn-link text-primary btn-sm"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="booking-history-container">
        <h2 style={{ textAlign: "center" }}>Booking History</h2>

        {bookingData.length > 0 ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {bookingData.map((booking) => (
              <div
                key={booking.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  margin: "10px",
                  width: "300px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "8px",
                  backgroundColor: "lightblue",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <p>
                  <strong>Procedure Name:</strong> {booking.pname}
                </p>
                <p>
                  <strong> Price:</strong> {booking.price}
                </p>
                <p>
                  <button
                    style={{ backgroundColor: "green", borderRadius: "5px" }}
                  >
                    {" "}
                    <strong> Status :</strong> {booking.status}
                  </button>
                </p>
                {/* <p>
                  <strong>Date:</strong> {booking.booking_date}
                </p> */}
              </div>
            ))}
          </div>
        ) : (
          <p className="no-booking-history" style={{ textAlign: "center" }}>
            No booking history found.
          </p>
        )}
      </div>
    </div>
  );
}

export default PatientLandingPageArea;
