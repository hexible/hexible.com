import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { zBlog } from "../blog.schema";

// Infer the TypeScript type from the Zod schema
export type Blog = z.infer<typeof zBlog>;

// Define the prop type for your BlogCard component.
// Assuming your item has a URL and the blog data.
interface BlogCardItem {
  url: string;
  data: Blog;
}

interface BlogCardProps {
  item: BlogCardItem;
}

const BlogCard: React.FC<BlogCardProps> = ({ item }) => {
  return (
    <Link
      href={item.url}
      className="grid grid-cols-1 p-5 border border-main-black/70 border-b-4 border-b-main-black rounded-3xl w-full"
    >
      <Image
        src={item.data.cover}
        alt={item.data.title}
        width={323}
        height={181}
        priority
        className="rounded-xl w-full"
      />
      <span className="flex-1 pt-4 col">
        {item.data.tag && (
          <span className="mb-2 font-mono text-xs">{item.data.tag}</span>
        )}
        <span className="flex-1 mb-6">
          <h2 className="font-semibold text-xl">{item.data.title}</h2>
        </span>
        <p className="mt-5 text-muted-foreground text-sm">
          {[item.data.team, item.data.date.toLocaleDateString()]
            .filter(Boolean)
            .join(" · ")}
        </p>
      </span>
    </Link>
  );
};

export default BlogCard;
