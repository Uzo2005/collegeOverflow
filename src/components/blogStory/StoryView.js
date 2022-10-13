import Link from "next/link";


const StoryView = ({ title, author, datePublished, story }) => {
  return (
    <article className=" bg-sky-200 md:p-8  md:col-span-4 md:text-center md:border-2 border-slate-700 rounded-md w-screen h-max ">
      <div className="md:grid md:grid-cols-6 md:grid-rows-6 md:h-[150px] mx-3 p-1">
        <Link href="#">
          <span className="md:col-start-3 font-bold md:w-fit text-slate-900 md:col-span-3 md:row-end-1 cursor-pointer">
            <span className=" border-b-2 border-red-500 mb-3">{title}</span>
          </span>
        </Link>

        <div className="place-content-center md:col-span-4 md:row-start-1 md:row-span-5 h-[120px] bg-sky-50 w-fit p-3 mt-5 md:mt-0 rounded-md border-2 border-slate-700">
          <article className="border-l-4 h-[100px] w-fit border-red-600 px-1 overflow-hidden">
            {story}
          </article>
        </div>

        <span className=" md:col-start-6 md:row-end-1 font-medium text-red-700 md:h-[50px] md:px-7 w-full">
          <a href="#">Author: {author} </a>
        </span>
        <time className="md:col-start-6 md:row-start-6 font-sm italic absolute ml-2">
          {datePublished}
        </time>
      </div>
    </article>
  );
};

export default StoryView;
