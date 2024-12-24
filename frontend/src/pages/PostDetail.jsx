import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PostService from "../services/post.service";
import Swal from "sweetalert2";
import { useAuthContext } from "../context/AuthContext";

const baseURL = import.meta.env.VITE_PIC_URL;

const PostDetail = () => {
  const [postDetail, setPostDetail] = useState(null);
  const { id } = useParams();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await PostService.getPostsById(id);
        if (response.status === 200) {
          setPostDetail(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error?.response?.data?.message || error.message,
          icon: "error",
        });
      }
    };

    fetchPost();
  }, [id]);

  if (!postDetail) {
    return null; // ถ้าไม่มีข้อมูลโพสต์ ให้คืนค่า null โดยไม่แสดงอะไร
  }

  return (
    <div className="container mx-auto max-w-3xl mt-12 px-4 ">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden bg-blue-100">
        <div className="relative">
          <img
            src={`${baseURL}/${postDetail.cover}`}
            alt={postDetail.title}
            className="w-full h-72 object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black opacity-70 w-full p-4">
            <h1 className="text-4xl text-white font-bold">
              {postDetail.title}
            </h1>
          </div>
        </div>

        <div className="p-6">
          <p className="text-sm text-gray-400 mb-2">
            {postDetail.author?.username || "Unknown Author"} -{" "}
            {new Date(postDetail.createdAt).toLocaleDateString()}
          </p>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            {postDetail.summary}
          </p>
          <div
            className="prose text-gray-700"
            dangerouslySetInnerHTML={{ __html: postDetail.content }}
          />

          {postDetail.author?._id === user?.id && (
            <p className="mt-6 text-green-600 font-semibold">
              This post was created by you!
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 text-center">
        <a
          href="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Back
        </a>
      </div>
    </div>
  );
};

export default PostDetail;
