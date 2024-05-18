const Repository = ({ repo }) => {
  return (
    <div className="repository">
      <div className="repository-content">
        <div className="repository-top">
          <h3>{repo.name}</h3>
          <p>Updated on {new Date(repo.updated_at).toLocaleDateString()}</p>
        </div>
        <p className="repository-description">{repo.description}</p>
      </div>
    </div>
  );
};

export default Repository;