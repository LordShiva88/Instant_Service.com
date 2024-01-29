import Image from "next/image";
import React from "react";
import { FiCalendar, FiArrowRight } from "react-icons/fi";

const BlogSection = () => {
  const blogPosts = [
    {
      imageSrc: "https://i.ibb.co/Mpk1pzj/AC.jpg",
      category: "Home Appliances",
      date: "12th Jul, 2022",
      author: "Jane Smith",
      title:
        "Maximizing Comfort: Choosing the Right Air Conditioner for Your Home",
      content:
        "As the temperatures rise, finding the perfect air conditioner becomes crucial for a comfortable living space. In this guide, we'll explore the key factors to consider when selecting an air conditioner, including cooling capacity, energy efficiency, and smart features.",
    },
    {
      imageSrc: "https://i.ibb.co/VLF3vBR/serivicing.jpg",
      category: "Kitchen Appliances",
      date: "14th Jul, 2022",
      author: "Jane Smith",
      title: "Cool Innovations: The Latest in Refrigerator Technology",
      content:
        "Your kitchen's heartbeat, the refrigerator, has evolved with the times. From smart cooling systems to energy-efficient designs, explore the latest innovations in refrigerators that not only keep your food fresh but also add a touch of modernity to your kitchen.",
    },
    {
      imageSrc:
        "https://i.ibb.co/nR077v6/d-BJwzef-HTe5u-X9-Dj-Bz3-Oj-Ydh-K1s-Sl8rlmf9n-Gn5o-780x825-crop-center.webp",
      category: "Laundry Appliances",
      date: "16th Jul, 2022",
      author: "Jane Smith",
      title:
        "Effortless Laundry: Choosing the Right Washing Machine for Your Needs",
      content:
        "Laundry day doesn't have to be a hassle. In this comprehensive guide, we'll help you navigate the world of washing machines, discussing the different types, capacities, and features available, so you can make an informed decision for your laundry needs.",
    },
  ];

  return (
    <div>
      <div>

      </div>
      <div>
        <div className="flex items-center dark:bg-gray-800">
          <div className="p-4 mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-3 -mx-4 gap-10">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="w-full px-4 pt-4 hover:shadow-lg mr-2 border"
                >
                  <a
                    className="mb-0 overflow-hidden bg-white rounded dark:bg-gray-700"
                    href="#"
                  >
                    <div className="relative overflow-hidden h-72">
                      <Image
                        src={post.imageSrc}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        quality={100}
                        className="object-cover w-full h-full transition-all hover:scale-110 rounded-md"
                      />
                      <span className="absolute bottom-0 px-4 py-2 text-xs text-white -translate-x-1/2 bg-blue-500 left-1/2">
                        {post.category}
                      </span>
                    </div>
                    <div className="px-4 py-6">
                      <div className="flex items-center mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                        <FiCalendar className="mr-1" />
                        {post.date} - {post.author}
                      </div>
                      <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
                        {post.title}
                      </h2>
                      <p className="text-base leading-7 text-gray-400">
                        {post.content.slice(0, 100)} ....
                      </p>
                      <div className="flex items-center mt-4">
                        <a
                          href="#"
                          className="text-blue-500 dark:text-blue-300 hover:underline"
                        >
                          Read More
                          <FiArrowRight className="ml-1 inline-block animate-bounce" />
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            href="#_"
            className="relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 md:py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#f35748] rounded-lg group text-sm sm:text-base md:text-lg"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#4AB7C3] rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700 "></span>
            <span className="relative uppercase">See More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
