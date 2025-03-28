import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { User, Post } from "../types";
import UserProfile from "../components/UserProfile";
import UserActivities from "../components/UserActivities";

const UserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [errorUser, setErrorUser] = useState<string | null>(null);
  const [errorPosts, setErrorPosts] = useState<string | null>(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setUser(response.data);
        setLoadingUser(false);
      })
      .catch(error => {
        setErrorUser("Failed to fetch user.");
        setLoadingUser(false);
      });

    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => {
        setPosts(response.data);
        setLoadingPosts(false);
      })
      .catch(error => {
        setErrorPosts("Failed to fetch posts.");
        setLoadingPosts(false);
      });
  }, [id]);

  return (
    <div className="container">
      <UserProfile user={user} loading={loadingUser} error={errorUser} />
      <UserActivities posts={posts} loading={loadingPosts} error={errorPosts} />
    </div>
  );
};

export default UserPage;
