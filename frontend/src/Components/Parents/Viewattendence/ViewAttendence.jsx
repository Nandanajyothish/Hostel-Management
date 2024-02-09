
import React, { useEffect, useState } from 'react';
import { getUserAttendanceList } from '../../../Service/ParentApi';
import { useSelector } from 'react-redux';
import { selectParent } from '../../../Features/setParent';

const ViewAttendance = () => {
  const [attendanceList, setAttendanceList] = useState([]);
  const loggedInParent = useSelector(selectParent);

  const fetchAttendanceList = async () => {
    try {
      console.log('Fetching attendance list for parent:', loggedInParent);

      if (loggedInParent && loggedInParent.RollNumber) {
        const response = await getUserAttendanceList(loggedInParent.RollNumber);
        console.log('Attendance Response:', response);

       
        const attendance = response.attendance || [];
        setAttendanceList(attendance);
      } else {
        console.warn('No logged-in parent information or RollNumber available');
      }
    } catch (error) {
      console.error('Error fetching attendance list:', error.message);
    }
  };

  useEffect(() => {
  console.log('Logged-in parent:', loggedInParent);
  fetchAttendanceList();
}, [loggedInParent]);


  return (
    <div className="attendance-list-container">
      <h2>Attendance List</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th className="student-name-header">Student Name</th>
            <th className="roll-number-header">Roll Number</th>
            <th className="date-time-header">Date/Time</th>
          </tr>
        </thead>
        <tbody>
          {attendanceList.map((attendance) => (
            <tr key={attendance._id}>
              <td className="student-name-cell">{attendance.studentName}</td>
              <td className="roll-number-cell">{attendance.RollNumber}</td>
              <td className="date-time-cell">{new Date(attendance.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAttendance;
