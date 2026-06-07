const UserProfile = ({ user }) => {
  return (
    <div className="card">
      <p>Name: <strong>{user.name}</strong></p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default UserProfile;
