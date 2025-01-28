import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { PostsList } from "@/app/_components/posts-list";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Intro />
        <PostsList posts={allPosts} />
      </Container>
    </main>
  );
}
