import { post } from "../../../backend/routers/post.router";
import api from "./api";
const API_URL = import.meta.env.VITE_BASE_URL + "/post";

const createPost = async (post) => {
  const response = await api.post(API_URL, post, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
  return response;
};

const getPosts = async () => {
  const response = await api.get(API_URL);
  return response;
};

const editPost = async (id) => {
  const response = await api.put(`${API_URL}/${id}`);
  return response;
};

const getPostsById = async (id) => {
  const response = await api.get(`${API_URL}/${id}`);
  return response;
};

const deleteById = async (id) => {
  const response = await api.delete(`${API_URL}/${id}`, post);
  return response;
};

const PostService = {
  createPost,
  getPosts,
  getPostsById,
  deleteById,
  editPost,
};

export default PostService;
