const baseURL = import.meta.env.VITE_PIC_URL;

const Post = ({_id, title, author, summary, cover, createdAt }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="md:1/2 flex items-center justify-center">
       <a href={"/post/" + _id} className="href">
       <img 
          src={`${baseURL}/${cover}`}
          alt={title} 
          className="w-full h-64 object-cover" 
        />
       </a>
        
      </figure>
      <div className="card-body p-6 md:1/2 flex flex-col justify-between">

      <a href={"/post/" + _id} className="href">
        <h2 className="card-title">{title}</h2>
        </a>

        <p>{author.username} - {createdAt}</p>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default Post;
