import type { TableOfContents } from "fumadocs-core/server";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  toc: TableOfContents;
}

export const Toc: React.FC<Props> = ({ toc }) => {
  return (
    <nav className="bg-main-gray p-4 border rounded-3xl w-80">
      <span className="block p-4 font-medium">Table of contents</span>
      <ul>
        {toc.map((item) => (
          <li
            key={item.url}
            style={{ marginLeft: `${(item.depth - 2) * (4 * 4)}px` }}
            className="p-2 px-4"
          >
            <Link
              href={item.url}
              className="group flex flex-row items-center gap-2 hover:underline"
              title={item.title?.toString() ?? ""}
            >
              <ArrowRightIcon className="opacity-30 group-hover:opacity-100 w-4 h-4 transition-opacity shrink-0" />
              <span className="text-sm truncate">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
