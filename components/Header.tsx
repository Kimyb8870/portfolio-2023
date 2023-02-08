import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">Bong.Portfolio</Link>
      </div>
      <div className="flex justify-center">
        <Link
          href="https://github.com/Kimyb8870"
          className="bg-slate-400 px-4 py-1 rounded-full"
        >
          github
        </Link>
      </div>
    </header>
  );
};

export default Header;
