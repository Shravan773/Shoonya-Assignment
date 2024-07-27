import React from 'react';

function RetreatCard({ retreat }) {
  const formatDate = (timestamp) => {
    if (!timestamp) return 'Invalid Date'; //checking date is valid or not
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString(); //As date is given in Unicode
  };

  return (
    <div className="retreat-card">
      <img src={retreat.image} alt={retreat.title} />
      <div className="retreat-card-content">
        <h4>{retreat.title}</h4>
        <p>{retreat.description}</p>
        <p className="date">Date: {formatDate(retreat.date)}</p>
        <p className="location">Location: {retreat.location}</p>
        <p className="price">Price: ${retreat.price}</p>
      </div>
    </div>
  );
}

export default RetreatCard;
