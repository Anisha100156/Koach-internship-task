import React from "react";
import { User } from "../types";

interface Props {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const UserProfile: React.FC<Props> = ({ user, loading, error }) => {
  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return null;

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserProfile;
