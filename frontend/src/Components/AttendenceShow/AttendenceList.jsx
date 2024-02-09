// AttendenceList.jsx
import React, { useEffect, useState } from 'react';
// import { getAttendanceList } from '../../Service/AttendenceApi';
import './Attendence.css';
import { getAttendanceList } from '../../Service/UserApi';

const AttendenceList = () => {
  const [attendenceList, setAttendenceList] = useState([]);

  const fetchAttendanceList = async () => {
    try {
      const response = await getAttendanceList();
      console.log('Attendance Response:', response);
      const attendance = response.attendance || [];
      setAttendenceList(attendance);
    } catch (error) {
      console.error('Error fetching attendance list:', error.message);
    }
  };

  useEffect(() => {
    fetchAttendanceList();
  }, []);

  return (
    <div className="attendence-list-container">
      <h2>Attendance List</h2>
      <table className="attendence-table">
        <thead>
          <tr>
            <th className="student-name-header">Student Name</th>
            <th className="student-name-header">Roll Number</th>
            <th className="date-time-header">Date/Time</th>
          </tr>
        </thead>
        <tbody>
          {attendenceList
            .filter((attendance) => attendance.isPresent)
            .map((attendance) => (
              <tr key={attendance._id}>
                <td className="student-name-cell">{attendance.studentName}</td>
                <td className="student-name-cell">{attendance.RollNumber}</td>
                <td className="date-time-cell">{new Date(attendance.date).toLocaleString()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendenceList;
