const ApplicationItem = ({ application, deleteApplication }) => {
    return (
      <li>
        <h3>{application.company}</h3>
        <p>{application.position}</p>
        <p>Status: {application.status}</p>
        <button onClick={deleteApplication}>Delete</button>
      </li>
    );
  };
  
  export default ApplicationItem;
  