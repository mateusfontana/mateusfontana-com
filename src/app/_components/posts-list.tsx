import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function PostsList({ posts }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
        Posts
      </h2>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
