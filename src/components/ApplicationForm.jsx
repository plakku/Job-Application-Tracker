import { useState } from "react";

const ApplicationForm = ({ addApplication }) => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('Applied');

  const handleSubmit = (e) => {
    e.preventDefault();
    addApplication({ company, position, status });
    setCompany('');
    setPosition('');
    setStatus('Applied');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      <button type="submit">Add Application</button>
    </form>
  );
};

export default ApplicationForm;

