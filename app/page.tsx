import { post } from "@/data/post";
import Link from "next/link";

export default function Home() {
  return (
      <div className="flex flex-col justify-center items-center gap-5 font-sans max-w-[1440px] md:mx-auto my-[30px] mx-5">
        <h1 className="text-black font-bold text-4xl uppercase">blog post</h1>
        <div className="flex flex-col justify-center items-start md:items-center gap-5">
          {
            post.map((post) => (
              <Link className="hover:underline underline-offset-2 text-blue-500" key={`${post.id}`} href={`/${post.id}`}>{post.title}</Link>
            ))
          }
        </div>
      </div>
  );
}
