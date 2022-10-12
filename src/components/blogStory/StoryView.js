import Link from "next/link";
import Image from "next/image";

const StoryView = ({ title, author, datePublished, tags }) => {
  return (
    <Link href="#">
      <article className="bg-blue-200 rounded-sm h-fit w-fit p-8  col-span-4 text-center border-2 border-slate-700">
        <div className="grid grid-cols-4 h-[150px]">
          <span className="col-start-2 font-bold w-fit text-slate-900 col-span-3 row-end-1">
            <span className=" border-b-2 border-red-500 ">{title}</span>
          </span>

          <span className="col-start-4 row-end-1 font-medium text-red-700 h-[50px] px-7">
            Author: {author}{" "}
          </span>
          <time className="col-start-4 row-start-2 font-light text-red-700">
            {datePublished}
          </time>

          <div className="row-start-4 col-span-4 -mb-12">
            Tags:
            {tags &&
              tags.map((tag) => {
                return (
                  <span className="bg-green-300 border-2 rounded-md border-slate-600  w-fit px-2  mx-1">
                    {tag}
                  </span>
                );
              })}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default StoryView;
