import PageHeader from "@/components/common/page-header";
import { Metadata } from "next";
import { ProductsData } from "./products.data";
import { ProductsCard } from "./product-card";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: ProductsData.title,
  description: ProductsData.description,
};

export default function ClientProducts() {
  return (
    <div className="space-y-20 container">
      <PageHeader
        title={ProductsData.title}
        description={ProductsData.description}
      />
      <div className="gap-4 grid grid-cols-1">
        {ProductsData.items.map((data) => (
          <ProductsCard key={data.title} item={data} />
        ))}
      </div>
    </div>
  );
}
