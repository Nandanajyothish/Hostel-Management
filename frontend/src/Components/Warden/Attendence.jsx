// // Attendence.js
// import { markAttendance } from '../../Service/WardenApi';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';
// import { useState } from 'react';
// import './Attendstyle.css';

// const Attendence = () => {
//   const [attendanceData, setAttendanceData] = useState({
//     studentName: '',
//     isPresent: false,
//     rollno:''
//   });

//   const handleMarkAttendance = async () => {
//     try {
//       const isPresentValue = attendanceData.isPresent;
//       const attendanceDataToSend = {
//         ...attendanceData,
//         isPresent: isPresentValue,
//       };

//       const result = await markAttendance(attendanceDataToSend);

//       console.log('Attendance marked successfully:', result);

//       const toastMessage = isPresentValue
//         ? ' Present Marked'
//         : ' Absent Marked';

//       toast.success(toastMessage);
//     } catch (error) {
//       console.error('Error marking attendance:', error.message);
//       toast.error('Error marking attendance');
//     }
//   };

//   return (
//     <div className='attendance-container'>
//       <h1 className='attendance-heading'>Attendance Marking </h1>
//       <div className='attendance-form'>
//         <div>
//           <label className='attendance-label'>Student Name:</label>
//           <input
//             type="text"
//             className='attendance-input'
//             value={attendanceData.studentName}
//             onChange={(e) => setAttendanceData({ ...attendanceData, studentName: e.target.value })}
//           />
//         </div>
//         <div>
//           <label className='attendance-label'>Present:</label>
//           <input
//             type="checkbox"
//             checked={attendanceData.isPresent}
//             onChange={() => setAttendanceData({ ...attendanceData, isPresent: !attendanceData.isPresent })}
//           />
//         </div>
//         <button className='attendance-button' onClick={handleMarkAttendance}>Mark Attendance</button>
//       </div>
//       <ToastContainer className='attendance-toast' />
//     </div>
//   );
// };

// export default Attendence;
// Attendence.jsx
import { markAttendance } from '../../Service/WardenApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import './Attendstyle.css';

const Attendence = () => {
  const [attendanceData, setAttendanceData] = useState({
    studentName: '',
    isPresent: false,
    rollno: '', 
  });

  const handleMarkAttendance = async () => {
    try {
      const isPresentValue = attendanceData.isPresent;
      const attendanceDataToSend = {
        ...attendanceData,
        isPresent: isPresentValue,
      };

      const result = await markAttendance(attendanceDataToSend);

      console.log('Attendance marked successfully:', result);

      const toastMessage = isPresentValue
        ? ' Present Marked'
        : ' Absent Marked';

      toast.success(toastMessage);
    } catch (error) {
      console.error('Error marking attendance:', error.message);
      toast.error('Error marking attendance');
    }
  };

  return (
    <div className='attendance-container'>
      <h1 className='attendance-heading'>Attendance Marking </h1>
      <div className='attendance-form'>
        <div>
          <label className='attendance-label'>Student Name:</label>
          <input
            type="text"
            className='attendance-input'
            value={attendanceData.studentName}
            onChange={(e) => setAttendanceData({ ...attendanceData, studentName: e.target.value })}
          />
        </div>
        <div>
          <label className='attendance-label'>Roll Number:</label>
          <input
            type="number" 
            className='attendance-input'
            value={attendanceData.rollno}
            onChange={(e) => setAttendanceData({ ...attendanceData, rollno: e.target.value })}
          />
        </div>
        <div>
          <label className='attendance-label'>Present:</label>
          <input
            type="checkbox"
            checked={attendanceData.isPresent}
            onChange={() => setAttendanceData({ ...attendanceData, isPresent: !attendanceData.isPresent })}
          />
        </div>
        <button className='attendance-button' onClick={handleMarkAttendance}>Mark Attendance</button>
      </div>
      <ToastContainer className='attendance-toast' />
    </div>
  );
};

export default Attendence;
