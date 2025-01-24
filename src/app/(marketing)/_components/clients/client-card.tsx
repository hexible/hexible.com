import { clientListData } from "./client-list.data";

interface CardProps extends React.ComponentProps<"div"> {
  data: (typeof clientListData)[number];
}
export const ClientCard = ({ data }: CardProps) => {
  return (
    <>
      <data.image className="mx-1 sm:mx-4 md:mx-10 w-32 h-16" />
    </>
  );
};
