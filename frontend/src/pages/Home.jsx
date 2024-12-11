import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Cat News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <div className="h-64 bg-cover rounded-md mb-4">
              <img
                src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8MHwwfHx8MA%3D%3D"
                alt="Cat News 1"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Amazing New Discovery About Cats' Behavior
            </h3>
            <p className="text-gray-700">
              Researchers have uncovered new insights into the mysterious
              behaviors of domestic cats. Learn more about what makes your cat
              unique.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <div className="h-64 bg-cover rounded-md mb-4">
              <img
                src="https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfDB8MHx8fDA%3D"
                alt="Cat News 2"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              The Best Tips for Taking Care of Your Cat
            </h3>
            <p className="text-gray-700">
              Here are some expert tips on how to ensure your cat stays healthy
              and happy. From feeding to grooming, get the best advice for your
              furry friend.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
