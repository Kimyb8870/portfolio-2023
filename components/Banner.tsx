const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Portfolio Title</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to my <span className="underline">Portfolio</span>
        </h2>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex fugiat fuga
        deserunt libero voluptatem eveniet, deleniti porro nesciunt, tenetur
        possimus in provident delectus sint nihil recusandae consectetur autem
        quisquam id.
      </p>
    </div>
  );
};

export default Banner;
