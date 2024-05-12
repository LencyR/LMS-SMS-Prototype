import React, { useState, useEffect } from 'react'

function Tasks() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('');

  const modalContentMap = {
    'TODO-Homework': (
      <div className='modal-content'>
        <h2>Homework</h2>
        <p>Programming Language - Trends in Programming Languages?</p>
        <p>Foreign Language 2 - Different Names of China.</p>
      </div>
    ),
    'TODO-Projects': (
      <div className='modal-content'>
        <h2>Project</h2>
        <p>Foreign Language 2 - Create a Chinese Song</p>
        <p>System Analysis and Design - Chapter 1 to 3</p>
      </div>
    ),
    'TODO-Activity': (
      <div className='modal-content'>
        <h2>Activity</h2>
        <p>Software Engineering - Define the following; <br /> 
        What is Software? <br /> 
        What is Engineering <br /> 
        What is Software Engineering?</p>
        <p>Foreign Language 2 - Practice Writing </p>
      </div>
    ),
    'Upcoming-Homework': (
      <div className='modal-content'>
        <h2>Homework</h2>
      </div>
    ),
    'Upcoming-Projects': (
      <div className='modal-content'>
        <h2>Project</h2>
        <p>System Analysis and Design - Prototype of System </p>
      </div>
    ),
    'Upcoming-Activity': (
      <div className='modal-content'>
        <h2>Activity</h2>
      </div>
    ),
    'Prelims': (
      <div className='modal-content'>
        <h2>Preliminary</h2>
        <p>Social Issues and Professional Practices</p>
        <p>Software Engineering 1</p>
        <p>Fundamentals of Database Systems</p>
        <p>Programming Languages</p>
        <p>System Fundamentals</p>
        <p>System Analysis and Design</p>
        <p>Foreign Language 2 </p>
      </div>
    ),
    'Midterms': (
      <div className='modal-content'>
        <h2>Midterms</h2>
        <p>Social Issues and Professional Practices</p>
        <p>System Fundamentals</p>
        <p>Foreign Language 2 </p>
      </div>
    ),
    'Finals': (
      <div className='modal-content'>
        <h2>Finals</h2>
      </div>
    )
  };

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); 
  
  return (
    <div className='tasks'>
      {modalOpen && 
        <div className="task-modal-container">
        <div className="task-modal">
          <p onClick={() => setModalOpen(false)}>&times;</p>
          <h1>{modalContent}</h1>
        </div>
      </div>
      }
      <header>
          <h2>TO DO:</h2>
      </header>
      <div className="tasks-grid-container">
        <div className={modalOpen ? 'no-hover' : '' } onClick={() => openModal(modalContentMap['TODO-Homework'])}>
          <h3>Homework</h3>
        </div>
        <div className={modalOpen ? 'no-hover' : '' } onClick={() => openModal(modalContentMap['TODO-Projects'])}>
          <h3>Projects</h3>
        </div>
        <div className={modalOpen ? 'no-hover' : '' } onClick={() => openModal(modalContentMap['TODO-Activity'])}>
          <h3>Activity</h3>
        </div>
      </div>
      <header>
          <h2>UPCOMING:</h2>
        </header>
      <div className="tasks-grid-container">
        <div className={modalOpen ? 'no-hover' : '' } onClick={() => openModal(modalContentMap['Upcoming-Homework'])}>
          <h3>Homework</h3>
        </div>
        <div className={modalOpen ? 'no-hover' : '' } onClick={() => openModal(modalContentMap['Upcoming-Projects'])}>
          <h3>Projects</h3>
        </div>
        <div className={modalOpen ? 'no-hover' : '' } onClick={() => openModal(modalContentMap['Upcoming-Activity'])}>
          <h3>Activity</h3>
        </div>
      </div>
      <header>
          <h2>EXAMS:</h2>
        </header>
      <div className="tasks-grid-container">
        <div className={modalOpen ? 'no-hover' : '' } onClick={() => openModal(modalContentMap['Prelims'])}>
          <h3>Prelims</h3>
        </div>
        <div className={modalOpen ? 'no-hover' : '' } onClick={() => openModal(modalContentMap['Midterms'])}>
          <h3>Midterm</h3>
        </div>
        <div className={modalOpen ? 'no-hover' : '' } onClick={() => openModal(modalContentMap['Finals'])}>
          <h3>Finals</h3>
        </div>
      </div>
    </div>
  )
}

export default Tasks