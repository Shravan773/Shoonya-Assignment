import React from 'react';
import RetreatCard from './RetreatCard';
//check if retreats are avaiable-**Base Case
function RetreatList({ retreats }) {
  if (!Array.isArray(retreats) || retreats.length === 0) {
    return <div>No retreats found.</div>;
  }

  return (
    <div className="retreat-list">
      {retreats.map(retreat => (
        <RetreatCard key={retreat.id} retreat={retreat} />
      ))}
    </div>
  );
}

export default RetreatList;
