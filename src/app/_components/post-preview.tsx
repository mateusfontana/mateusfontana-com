import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="flex flex-row">
        <div className="w-full max-w-[120px]">
            <DateFormatter dateString={date} />
        </div>
        <div className="pl-4">
            <h3>
                <Link href={`/posts/${slug}`} className="hover:underline">
                    {title}
                </Link>
            </h3>
            <p>{excerpt}</p>
        </div>
    </div>
  );
}
