import ApplicationItem from './ApplicationItem';

const ApplicationList = ({ applications, deleteApplication }) => {
  return (
    <ul>
      {applications.map((application, index) => (
        <ApplicationItem
          key={index}
          application={application}
          deleteApplication={() => deleteApplication(index)}
        />
      ))}
    </ul>
  );
};

export default ApplicationList;
