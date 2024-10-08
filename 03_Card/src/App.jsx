import React from "react";
import ArticleCard from "./Components/Cards";

const App = () => {
  let modiImg =
    "https://dl6pgk4f88hky.cloudfront.net/2023/09/11/Modi-1038x778.jpg";

  let putinImg =
    "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/XHCJ7LOYPBNBLH5W3274ZWO66U.jpg";

  let obamaImg =
    "https://cdn.britannica.com/19/101219-050-A07A26EF/Barack-Obama.jpg";

  let xiJinpingImg =
    "https://thediplomat.com/wp-content/uploads/2018/01/sizes/td-story-s-2/thediplomat-618px-xi_jinping_in_2016.jpg";

  const data = [
    {
      image: modiImg,
      category: "India",
      date: { day: "25", month: "May" },
      title: "Narendra Damodardas Modi",
    },
    {
      image: putinImg,
      category: "Russia",
      date: { day: "10", month: "Mar" },
      title: "Vladimir Putin",
    },
    {
      image: obamaImg,

      category: "USA",
      date: { day: "20", month: "Jan" },
      title: "Barack Obama",
    },
    {
      image: xiJinpingImg,
      category: "Chine",
      date: { day: "25", month: "May" },
      title: "Xi Jingping",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10">
        {data.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default App;
