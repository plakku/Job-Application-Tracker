import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './components/ApplicationList';
//import './styles.css';

const App = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const storedApplications = JSON.parse(localStorage.getItem('applications')) || [];
    setApplications(storedApplications);
  }, []);

  useEffect(() => {
    localStorage.setItem('applications', JSON.stringify(applications));
  }, [applications]);

  const addApplication = (application) => {
    setApplications([...applications, application]);
  };

  const deleteApplication = (index) => {
    const newApplications = applications.filter((_, i) => i !== index);
    setApplications(newApplications);
  };

  return (
    <div>
      <Navbar />
      <ApplicationForm addApplication={addApplication} />
      <ApplicationList applications={applications} deleteApplication={deleteApplication} />
    </div>
  );
};

export default App;

