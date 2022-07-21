import React, { useState } from "react";
import PortfolioHeader from './PortfolioHeader';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from "../pages/Resume";

const Pages = () => {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if(currentPage === 'AboutMe')
        return <AboutMe />;
    };
    const handlePageChange = (page) => setCurrentPage(page);
    return (<main className="container text-center border border-primary">
      
        <PortfolioHeader currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}

    </main>)
}

export default Pages;







