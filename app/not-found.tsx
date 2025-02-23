"use client";

import { ArrowLeft } from "lucide-react";
import NotFondImage from "@/public/Illustration/_404.svg";
import { Footer, Header } from "@/components/common";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <Header />
      <section>
        <div className="lg:flex lg:items-center lg:gap-12 mx-auto px-6 py-12 min-h-[80vh] container">
          <div className="lg:w-1/2 wf-ull">
            <p className="font-medium text-main-green text-sm">404 error</p>
            <h1 className="mt-3 font-semibold text-gray-800 text-2xl md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 text-gray-500">
              Sorry, the page you are looking for doesn&apos;t exist. Here are
              some helpful links:
            </p>
            <div className="flex items-center gap-x-3 mt-6">
              {/* Go Back Button */}
              <button
                onClick={() => router.back()}
                className="flex justify-center items-center gap-x-2 bg-white hover:bg-gray-100 px-5 py-2 border rounded-lg w-1/2 sm:w-auto text-gray-700 text-sm text-nowrap transition-colors duration-200"
              >
                <ArrowLeft />
                <span>Go back</span>
              </button>

              {/* Take Me Home Button */}
              <Link
                href="/"
                className="bg-main-green hover:bg-main-green px-5 py-2 rounded-lg w-1/2 sm:w-auto text-main-black text-sm text-center tracking-wide transition-colors duration-200 shrink-0"
              >
                Take me home
              </Link>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0 w-full lg:w-1/2">
            <NotFondImage className="lg:mx-auto w-full max-w-lg h-40" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
