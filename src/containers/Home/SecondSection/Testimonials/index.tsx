import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <>
      <h3 className=" text-heading-3 font-label font-bold pt-14 mb-1">
        Testimonials pelanggan
      </h3>
      <p className=" text-heading-4 mb-4">Pendapat pelanggan tentang kami</p>

      <div className=" flex justify-between">
        {Array.from({ length: 4 }).map((_, index) => {
          return <TestimonialCard />;
        })}
      </div>
    </>
  );
};

export default Testimonials;

// {Array.from({ length: 4 }).map((_, index) => {
//   return <TestimonialCard key={index} />;
// })}
