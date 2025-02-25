import { TestimonialsData } from "./testimonials.data";

interface Props extends React.ComponentProps<"div"> {
  data: (typeof TestimonialsData.items)[number];
}

export const ReviewCards = ({ data, ...props }: Props) => {
  return (
    <div {...props}>
      <div className="border-main-green mx-4 mt-10 py-10 p-8 border rounded-3xl min-h-44 text-main-gray">
        {data.review}
      </div>

      <div className="mx-auto mt-2 ml-10">
        <p className="text-main-green"> {data.name} </p>
        <p className="text-white"> {data.position} </p>
      </div>
    </div>
  );
};
