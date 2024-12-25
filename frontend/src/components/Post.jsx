const baseURL = import.meta.env.VITE_PIC_URL;

const Post = ({ _id, title, author, summary, cover, createdAt }) => {
  return (
    <div className="card shadow-xl max-w-lg md:max-w-xl lg:max-w-2xl w-full mx-auto my-6 shadow-lg bg-slate-50">
      {" "}
      <figure className="md:1/2 flex items-center justify-center">
        <a href={"/post/" + _id} className="href">
          <img
            src={`${baseURL}/${cover}`}
            alt={title}
            className="w-full h-80 object-cover"
          />
        </a>
      </figure>
      <div className="card-body p-8 flex flex-col justify-between">
        <a href={"/post/" + _id} className="href">
          <h2 className="card-title text-2xl font-semibold">{title}</h2>
        </a>
        <p className="text-sm text-gray-500">
          {author.username} - {createdAt}
        </p>
        <p>{summary}</p>
        <div className="mt-4">
          <a
            href={"/post/" + _id}
            className="inline-block px-6 py-3 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition duration-300"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
