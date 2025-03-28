import React from "react";
import { Post } from "../types";

interface Props {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const UserActivities: React.FC<Props> = ({ posts, loading, error }) => {
  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="user-activities">
      <h3>User Activities</h3>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UserActivities;
