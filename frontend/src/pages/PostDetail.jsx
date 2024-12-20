import { useEffect, useState } from "react";
import PostService from "../services/post.service";
import Swal from "sweetalert2";
import { useParams } from "react-router";
import { useAuthContext } from "../context/AuthContext";

//FIX
const PostDetail = () => {
  const [postDetail, setPostDetail] = useState(null); // ตั้งชื่อ state ให้ตรง
  const { id } = useParams(); // ดึง id จาก URL
  const { user } = useAuthContext(); // ดึงข้อมูล user จาก context

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // ส่ง id ไปเพื่อดึงข้อมูลโพสต์ที่ตรงกับ id
        const response = await PostService.getPostsById(id);
        if (response.status === 200) {
          setPostDetail(response.data); // เก็บข้อมูลโพสต์ลง state
        }
      } catch (error) {
        Swal.fire({
          title: "Post Detail",
          text: error?.response?.data?.message || error.message,
          icon: "error",
        });
      }
    };

    fetchPost(); // เรียกใช้ฟังก์ชันดึงข้อมูลโพสต์
  }, [id]); // จะทำงานใหม่ทุกครั้งที่ id เปลี่ยน

  // ตรวจสอบว่าโพสต์นี้ถูกสร้างโดยผู้ใช้งานคนเดียวกับที่ล็อกอินหรือไม่
  return (
    <div>
      {postDetail ? (
        <div>
          <h1>{postDetail.title}</h1>
          <p>{postDetail.author.username}</p>
          <p>{postDetail.summary}</p>
          <div>{postDetail.content}</div>
          {/* ตรวจสอบว่าโพสต์นี้ถูกสร้างโดยผู้ใช้งานคนเดียวกับที่ล็อกอินหรือไม่ */}
          {postDetail.author._id === user?.id && <p>This post was created by you!</p>}
        </div>
      ) : (
        <p>Loading...</p> // แสดงข้อความระหว่างที่กำลังโหลดข้อมูล
      )}
    </div>
  );
};

export default PostDetail;
