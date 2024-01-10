import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils";

const Article = () => {
  const navigate = useNavigate();

  return (
    <div className=" overflow-y-auto  bg-gradient-to-tl from-gray-950  via-gray-400 to-gray-950 py-[16px] pt-[96px] shadow-lg flex flex-wrap items-center justify-center">
      <div
        className="bg-[#f1f2f5] h-[320px] w-[320px] shadow-2xl mt-[16px] rounded-xl flex flex-col mx-[40px]"
        onClick={() => navigate(ROUTES.ARTICLE_DETAILS)}
      >
        <img
          alt="articalIcon"
          className="h-[230px] w-[400px] rounded-t-xl"
          src="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/1/21/GettyImages-724237003.jpg.rend.hgtvcom.231.174.suffix/1611275732775.jpeg"
        />
        <span className=" m-1 font-bold text-l text-gray-700 ">
          What Happens When Stars Kiss (Hint: They Explode)
        </span>
        <div className=" flex justify-between  mt-[8px] mx-[6px]">
          <span className="text-xs text-[#7b7b7b]">11 min read</span>
          <span className="text-xs  text-[#7b7b7b]">By Paul Warker</span>
        </div>
      </div>
      <div className="bg-[#f1f2f5] h-[320px] w-[320px] shadow-xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <img
          alt="articalIcon"
          className="h-[230px] w-[400px] rounded-t-xl"
          src="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/3/3/1858_eclipsing_binaries.jpeg.rend.hgtvcom.231.174.suffix/1614841504059.jpeg"
        />
        <span className=" m-1 font-bold text-l text-gray-700 ">
          What Happens When Stars Kiss (Hint: They Explode)
        </span>
        <div className=" flex justify-between  mt-[8px] mx-[6px]">
          <span className="text-xs text-[#7b7b7b]">11 min read</span>
          <span className="text-xs  text-[#7b7b7b]">By Paul Warker</span>
        </div>
      </div>
      <div className="bg-[#f1f2f5] h-[320px] w-[320px] shadow-xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <img
          alt="articalIcon"
          className="h-[230px] w-[400px] rounded-t-xl"
          src="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/3/12/moon_image_2.png.rend.hgtvcom.231.174.suffix/1615585531582.png"
        />
        <span className=" m-1 font-bold text-l text-gray-700 ">
          What Happens When Stars Kiss (Hint: They Explode)
        </span>
        <div className=" flex justify-between  mt-[8px] mx-[6px]">
          <span className="text-xs text-[#7b7b7b]">11 min read</span>
          <span className="text-xs  text-[#7b7b7b]">By Paul Warker</span>
        </div>
      </div>
      <div className="bg-[#f1f2f5] h-[320px] w-[320px] shadow-xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <img
          alt="articalIcon"
          className="h-[230px] w-[400px] rounded-t-xl"
          src="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2022/8/3/GSFC_20171208_Archive_e000132_orig.jpg.rend.hgtvcom.231.174.suffix/1659545588679.jpeg"
        />
        <span className=" m-1 font-bold text-l text-gray-700 ">
          What Happens When Stars Kiss (Hint: They Explode)
        </span>
        <div className=" flex justify-between  mt-[8px] mx-[6px]">
          <span className="text-xs text-[#7b7b7b]">11 min read</span>
          <span className="text-xs  text-[#7b7b7b]">By Paul Warker</span>
        </div>
      </div>
      <div className="bg-[#f1f2f5] h-[320px] w-[320px] shadow-xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <img
          alt="articalIcon"
          className="h-[230px] w-[400px] rounded-t-xl"
          src="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/3/3/1858_eclipsing_binaries.jpeg.rend.hgtvcom.231.174.suffix/1614841504059.jpeg"
        />
        <span className=" m-1 font-bold text-l text-gray-700 ">
          What Happens When Stars Kiss (Hint: They Explode)
        </span>
        <div className=" flex justify-between  mt-[8px] mx-[6px]">
          <span className="text-xs text-[#7b7b7b]">11 min read</span>
          <span className="text-xs  text-[#7b7b7b]">By Paul Warker</span>
        </div>
      </div>
      <div className="bg-[#f1f2f5] h-[320px] w-[320px] shadow-xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <img
          alt="articalIcon"
          className="h-[230px] w-[400px] rounded-t-xl"
          src="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2022/3/10/26306658253_080bac1ba5_o.jpeg.rend.hgtvcom.231.174.suffix/1646938861123.jpeg"
        />
        <span className=" m-1 font-bold text-l text-gray-700 ">
          What Happens When Stars Kiss (Hint: They Explode)
        </span>
        <div className=" flex justify-between  mt-[8px] mx-[6px]">
          <span className="text-xs text-[#7b7b7b]">11 min read</span>
          <span className="text-xs  text-[#7b7b7b]">By Paul Warker</span>
        </div>
      </div>
      <div className="bg-[#f1f2f5] h-[320px] w-[320px] shadow-xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <img
          alt="articalIcon"
          className="h-[230px] w-[400px] rounded-t-xl"
          src="https://discovery.sndimg.com/content/dam/images/discovery/editorial/shows/a/apollo-50th/articles/Apollo_stars_002.jpg.rend.hgtvcom.231.174.suffix/1563572478009.jpeg"
        />
        <span className=" m-1 font-bold text-l text-gray-700 ">
          What Happens When Stars Kiss (Hint: They Explode)
        </span>
        <div className=" flex justify-between  mt-[8px] mx-[6px]">
          <span className="text-xs text-[#7b7b7b]">11 min read</span>
          <span className="text-xs  text-[#7b7b7b]">By Paul Warker</span>
        </div>
      </div>
      <div className="bg-[#f1f2f5] h-[320px] w-[320px] shadow-xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <img
          alt="articalIcon"
          className="h-[230px] w-[400px] rounded-t-xl"
          src="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2022/3/10/26306658253_080bac1ba5_o.jpeg.rend.hgtvcom.231.174.suffix/1646938861123.jpeg"
        />
        <span className=" m-1 font-bold text-l text-gray-700 ">
          What Happens When Stars Kiss (Hint: They Explode)
        </span>
        <div className=" flex justify-between  mt-[8px] mx-[6px]">
          <span className="text-xs text-[#7b7b7b]">11 min read</span>
          <span className="text-xs  text-[#7b7b7b]">By Paul Warker</span>
        </div>
      </div>
      <div className="bg-[#f1f2f5] h-[320px] w-[320px] shadow-xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <img
          alt="articalIcon"
          className="h-[230px] w-[400px] rounded-t-xl"
          src="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/3/12/moon_image_2.png.rend.hgtvcom.231.174.suffix/1615585531582.png"
        />
        <span className=" m-1 font-bold text-l text-gray-700 ">
          What Happens When Stars Kiss (Hint: They Explode)
        </span>
        <div className=" flex justify-between  mt-[8px] mx-[6px]">
          <span className="text-xs text-[#7b7b7b]">11 min read</span>
          <span className="text-xs  text-[#7b7b7b]">By Paul Warker</span>
        </div>
      </div>
      <div className="bg-[#f1f2f5] h-[320px] w-[320px] shadow-xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <img
          alt="articalIcon"
          className="h-[230px] w-[400px] rounded-t-xl"
          src="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2022/3/10/26306658253_080bac1ba5_o.jpeg.rend.hgtvcom.231.174.suffix/1646938861123.jpeg"
        />
        <span className=" m-1 font-bold text-l text-gray-700 ">
          What Happens When Stars Kiss (Hint: They Explode)
        </span>
        <div className=" flex justify-between  mt-[8px] mx-[6px]">
          <span className="text-xs text-[#7b7b7b]">11 min read</span>
          <span className="text-xs  text-[#7b7b7b]">By Paul Warker</span>
        </div>
      </div>
      <div className="bg-[#f1f2f5] h-[320px] w-[320px] shadow-xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <img
          alt="articalIcon"
          className="h-[230px] w-[400px] rounded-t-xl"
          src="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/3/12/moon_image_2.png.rend.hgtvcom.231.174.suffix/1615585531582.png"
        />
        <span className=" m-1 font-bold text-l text-gray-700 ">
          What Happens When Stars Kiss (Hint: They Explode)
        </span>
        <div className=" flex justify-between  mt-[8px] mx-[6px]">
          <span className="text-xs text-[#7b7b7b]">11 min read</span>
          <span className="text-xs  text-[#7b7b7b]">By Paul Warker</span>
        </div>
      </div>
      <div className="bg-[#f1f2f5] h-[320px] w-[320px] shadow-xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <img
          alt="articalIcon"
          className="h-[230px] w-[400px] rounded-t-xl"
          src="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2022/8/3/GSFC_20171208_Archive_e000132_orig.jpg.rend.hgtvcom.231.174.suffix/1659545588679.jpeg"
        />
        <span className=" m-1 font-bold text-l text-gray-700 ">
          What Happens When Stars Kiss (Hint: They Explode)
        </span>
        <div className=" flex justify-between  mt-[8px] mx-[6px]">
          <span className="text-xs text-[#7b7b7b]">11 min read</span>
          <span className="text-xs  text-[#7b7b7b]">By Paul Warker</span>
        </div>
      </div>
    </div>
  );
};

export default Article;
