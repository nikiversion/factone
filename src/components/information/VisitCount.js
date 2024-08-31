import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VisitCount() {
  const [visitorCount, setVisitorCount] = useState(0);

  const fetchVisitorCount = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/visitor-count');
      setVisitorCount(response.data.count);
    } catch (error) {
      console.error('Error fetching visitor count:', error);
    }
  };

  const incrementVisitorCount = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/increment-visitor');
      setVisitorCount(response.data.count);
    } catch (error) {
      console.error('Error incrementing visitor count:', error);
    }
  };

  useEffect(() => {
    incrementVisitorCount();
    fetchVisitorCount();
  }, []);

  return (
    <div className="App">
      <p >{visitorCount}</p>
    </div>
  );
}

export default VisitCount;
