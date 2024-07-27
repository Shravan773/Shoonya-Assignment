import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import RetreatList from './components/Retreatlist';
import FilterSection from './components/FilterSection';
import './App.css';

function App() {
  const [allRetreats, setAllRetreats] = useState([]); // Store all fetched retreats
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const retreatsPerPage = 3;

  useEffect(() => {
    fetchRetreats();
  }, [dateFilter, typeFilter, searchTerm]);

  const fetchRetreats = async () => {
    try {
      let url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?limit=100`;
         
      //Update the Api call each time for different results
      if (dateFilter) {
        url += `&filter=${encodeURIComponent(dateFilter)}`;
      }

      if (typeFilter) {
        url += `&filter=${encodeURIComponent(typeFilter)}`;
      }

      if (searchTerm) {
        url += `&search=${encodeURIComponent(searchTerm)}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setAllRetreats(data);
      setCurrentPage(1); // Reset to the first page on new fetch
    } catch (error) {
      console.error('Error fetching retreats:', error);
    }
  };
//Function to get the displayed retreats on the landing page
  const getDisplayedRetreats = () => {
    const startIdx = (currentPage - 1) * retreatsPerPage;
    const endIdx = startIdx + retreatsPerPage;
    return allRetreats.slice(startIdx, endIdx);
  };

  const handleFilter = (type, value) => {
    if (type === 'date') {
      setDateFilter(value);
    } else if (type === 'type') {
      setTypeFilter(value);
    }
    setCurrentPage(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };
  
  //pagination implemntaion(found this method from a blog)
  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => {
      const totalPages = Math.ceil(allRetreats.length / retreatsPerPage);
      return Math.min(prev + 1, totalPages);
    });
  };
  return (
    <div className="App">
      <Header />
      <main>
        <FilterSection onFilter={handleFilter} onSearch={handleSearch} />
        <RetreatList retreats={getDisplayedRetreats()} />
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
          <span>Page {currentPage} of {Math.ceil(allRetreats.length / retreatsPerPage)}</span>
          <button onClick={handleNextPage} disabled={currentPage * retreatsPerPage >= allRetreats.length}>Next</button>
        </div>
      </main>
    </div>
  );
}

export default App;
