import React, { useState, useEffect } from 'react';

function FilterSection({ onFilter, onSearch }) {
  const [dateFilter, setDateFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  //Adding delay because searching takes time and effect is called on every key press
  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);
    return () => clearTimeout(delay);
  }, [searchTerm, onSearch]);

  useEffect(() => {
    onFilter('date', dateFilter);
  }, [dateFilter, onFilter]);

  useEffect(() => {
    onFilter('type', typeFilter);
  }, [typeFilter, onFilter]);

  return (
    <div className="filter-section">
      <select 
        value={dateFilter} 
        onChange={(e) => setDateFilter(e.target.value)}
      >
        <option value="">Filter by Date</option>
        <option value="2023-24">2023-24</option>
        <option value="2024-25">2024-25</option>
      </select>
      <select 
        value={typeFilter} 
        onChange={(e) => setTypeFilter(e.target.value)}
      >
        <option value="">Filter by Type</option>
        <option value="Yoga">Yoga</option>
        <option value="Meditation">Meditation</option>
        <option value="Detox">Detox</option>
      </select>
      <input
        type="text"
        placeholder="Search retreats by Title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default FilterSection;
