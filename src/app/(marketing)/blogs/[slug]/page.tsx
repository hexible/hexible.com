import { blogSource } from "@/src/lib/source";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { AppData, url } from "@/src/data/app.data";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import { getAuthor } from "../blogs.data";
import Logo from "@/src/assets/common/logo.svg";
import { ProposalBanner } from "../../_components/services/proposal-banner";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await blogSource.getPage([slug]);
  const author = getAuthor(blog?.data.team);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    metadataBase: new URL(AppData.publicUrl),
    title: blog.data.title,
    description: blog.data.description,
    authors: [{ name: author.name }],
    alternates: {
      canonical: url(blog.url),
    },
    openGraph: {
      title: blog.data.title,
      description: blog.data.description,
      type: "article",
      publishedTime: blog.data.date.toISOString(),
      authors: author.name,
      images: blog.data.cover,
      url: url(blog.url),
    },
    twitter: {
      card: "summary_large_image",
      title: blog.data.title,
      description: blog.data.description,
      images: blog.data.cover,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await blogSource.getPage([slug]);
  const MDX = blog?.data.body;
  const author = getAuthor(blog?.data.team);
  const goBackUrl = "/blogs";

  if (!MDX) {
    return notFound();
  }

  // Create the JSON-LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    headline: blog?.data.title,
    datePublished: blog?.data.date.toISOString(),
    author: {
      "@type": "Person",
      name: author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Hexible",
      logo: {
        "@type": "ImageObject",
        url: url("/logo-small.svg"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url(blog.url),
    },
    image: {
      "@type": "ImageObject",
      url: url(blog.data.cover),
    },
  };

  return (
    <div>
      <Script
        strategy="beforeInteractive"
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="flex flex-col *:container">
        <div className="py-16">
          <Link
            href={goBackUrl}
            className="flex items-center gap-2 mb-4 text-muted-foreground"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Back to all blogs</span>
          </Link>
          <div className="flex md:flex-row flex-col gap-8 bg-main-gray mt-10 p-8 rounded-3xl">
            <div className="flex flex-col flex-1 justify-between">
              <h1 className="pt-2 font-bold text-4xl leading-tight">
                {blog?.data.title}
              </h1>
              <p className="hidden lg:block py-2 text-muted-foreground">
                {blog?.data.description}
              </p>

              <div className="flex flex-row items-center gap-4 mt-8">
                <div className="flex justify-center items-center bg-main-black rounded-full size-10">
                  {author.image ? (
                    <Image
                      className="rounded-full size-10 object-cover"
                      src={author.image}
                      alt={author.name}
                      width={48}
                      height={48}
                    />
                  ) : (
                    <Logo className="w-6 h-6" />
                  )}
                </div>
                <div className="flex flex-col">
                  <p className="font-medium">{author.name}</p>
                  <p className="text-muted-foreground text-sm">
                    {blog?.data.date.toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <Image
                src={blog?.data.cover}
                alt={blog?.data.title}
                width={400}
                height={200}
                priority
                className="rounded-lg w-full md:w-auto"
              />
            </div>
          </div>
        </div>
        <div className="prose">
          <InlineTOC defaultOpen items={blog?.data.toc} />
          <MDX components={{ ...defaultMdxComponents }} />
        </div>
        <div>
          <ProposalBanner />
        </div>
      </article>
    </div>
  );
}
