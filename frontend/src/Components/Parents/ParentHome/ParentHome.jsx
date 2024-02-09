import React from 'react';
import './Phome.css'

const ParentHome = () => {
  return (
    <div>
      
    <header className='user-h'>
    <div className="user-h-content">
      <h2 className='utwo'>Home For Career</h2>
      <div className='line'></div>
      <h6 className='uone'>We provide the best of the best</h6>
      <a href='#' className='ctn'>Learn more</a>

    </div>
    </header>
    <section className='scontent'>
      <div className='utitle'>
        <h4>For You</h4>
        <div className='sline'></div>
        <div className='scard'>
          <div className='icard'></div>
          <div className='icard'></div>
           </div>
           <div className='second'>
            <div className='jcard'></div>
            <div className='jcard'></div>
           </div>

      </div>
    </section>
    </div>
  );
}

export default ParentHome;
