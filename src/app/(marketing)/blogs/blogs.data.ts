import { AppData } from "@/src/data/app.data";

export const BlogsData = {
  title: "Blogs",
  description:
    "Our blogs are your go-to resource for the latest software development trends, in-depth tutorials, and expert insights that drive innovation and efficiency. We explore everything from agile methodologies and custom software solutions to emerging technologies and industry best practices, offering practical tips and real-world case studies to empower your digital transformation.",
};

export const authors = [
  {
    name: "Hexible Team",
    url: AppData.publicUrl,
  },
  {
    name: "Deepak J.",
    url: AppData.publicUrl,
    image: "/avatars/deepak.svg",
  },
];

export const getAuthor = (author?: string) => {
  return authors.find((a) => a.name === author)!;
};
