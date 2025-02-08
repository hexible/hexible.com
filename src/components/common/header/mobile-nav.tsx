"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { HeaderNavigationData } from "@/data/navigation.data";
import { AppData } from "@/data/app.data";

export const MobileNav = (props: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <Dialog.Root>
        {/* Trigger Button */}
        <Dialog.Trigger asChild>
          <button aria-label="Open navigation" className="flex items-center">
            <Menu size={24} />
          </button>
        </Dialog.Trigger>

        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

        {/* Content */}
        <Dialog.Content className="fixed inset-0 bg-white p-6 overflow-auto">
          {/* Close Icon */}
          <div className="flex justify-end">
            <Dialog.Close asChild>
              <button aria-label="Close navigation" className="text-gray-700">
                <X size={24} />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Title className="sr-only">{AppData.name}</Dialog.Title>
          <Dialog.Description className="sr-only">
            {AppData.taglinePart1}, {AppData.taglinePart2}
          </Dialog.Description>

          <nav className="mt-4">
            <ul className="flex flex-col gap-y-4">
              {HeaderNavigationData.map((item) => {
                if (item.children) {
                  return (
                    <li key={item.label}>
                      <Accordion.Root type="multiple">
                        <Accordion.Item value={item.label}>
                          <Accordion.Header>
                            <Accordion.Trigger className="flex justify-between items-center w-full font-bold text-xl">
                              {item.label}
                              {/* Expand/Collapse Arrow */}
                              <span className="ml-2">
                                <svg
                                  className="w-8 h-8 transition-transform"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    d="M8 9l4 4 4-4"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    fillRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </Accordion.Trigger>
                          </Accordion.Header>
                          <Accordion.Content>
                            <ul className="flex flex-col gap-y-2 mt-2 pl-4">
                              {item.children.map((child) => (
                                <li key={child.label}>
                                  <Dialog.Close asChild>
                                    <Link
                                      href={child.link}
                                      className="font-medium text-lg"
                                    >
                                      {child.label}
                                    </Link>
                                  </Dialog.Close>
                                </li>
                              ))}
                            </ul>
                          </Accordion.Content>
                        </Accordion.Item>
                      </Accordion.Root>
                    </li>
                  );
                }
                return (
                  <li key={item.label}>
                    <Dialog.Close asChild>
                      <Link href={item.link} className="font-bold text-xl">
                        {item.label}
                      </Link>
                    </Dialog.Close>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Request a Quote Button */}
          <div className="mt-6">
            <Dialog.Close asChild>
              <Button>Request a quote</Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};
