import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({
  title,
  date,
  excerpt,
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
