export default function Nav() {
  return (
    <nav className="flex justify-between">
      <div className="">
        <a
          href="/"
          className="text-2xl underline-offset-8 hover:underline hover:decoration-hover hover:decoration-4 "
        >
          TG
        </a>
      </div>
      <div className="mb-24 text-lg">
        <a
          href=""
          className="underline-offset-8 hover:underline hover:decoration-hover hover:decoration-4"
        >
          Projects
        </a>
        <a
          href=""
          className="ml-5 underline-offset-8 hover:underline hover:decoration-hover hover:decoration-4"
        >
          Skills
        </a>
        <a
          href=""
          className="ml-5 underline-offset-8 hover:underline hover:decoration-hover hover:decoration-4"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
