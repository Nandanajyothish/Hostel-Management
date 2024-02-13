import React, { useEffect, useState } from 'react';
import { getAttendanceList,searchAttendanceByRollNumber } from '../../../Service/ParentApi';
import './viewattandence.css';

const ViewAttendence = () => {
  const [attendenceList, setAttendenceList] = useState([]);
  const [searchRollNumber, setSearchRollNumber] = useState('');
  const [filteredAttendance, setFilteredAttendance] = useState([]);
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

  const handleSearch = async () => {
    try {
      const response = await searchAttendanceByRollNumber(searchRollNumber);
      const foundAttendance = response.attendance || [];
      setFilteredAttendance(foundAttendance);
    } catch (error) {
      console.error('Error searching attendance:', error.message);
    }
  };

  useEffect(() => {
    fetchAttendanceList();
    
  }, []);

  return (
    <div>
    
      
      <h2>Attendance List</h2>
      <div>
        <input
          type="text"
          placeholder="Enter Roll Number"
          value={searchRollNumber}
          onChange={(e) => setSearchRollNumber(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {filteredAttendance.length > 0 && (
      <div>
        <h2>Search Results</h2>
        <table className="filtered-attendence-table">
          <thead>
            <tr>
              <th className="student-name-header">Student Name</th>
              <th className="student-name-header">Roll Number</th>
              <th className="date-time-header">Date/Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredAttendance
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
    )}
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
}

export default ViewAttendence;
