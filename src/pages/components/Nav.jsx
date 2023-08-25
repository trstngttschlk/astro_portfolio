export default function Nav() {
  return (
    <nav className="flex justify-between">
      <div className="">
        <a
          href="/"
          className="hover:   hover:decoration-hover text-2xl underline-offset-8 hover:underline hover:decoration-4 "
        >
          {/* text-decoration-line: underline; text-decoration-color:
          hsl(var(--a)/1); text-decoration-thickness: 4px;
          text-underline-offset: 8px;  */}
          TG
        </a>
      </div>
      <div className="mb-24 text-lg">
        <a
          href=""
          className="   hover:decoration-hover hover: underline-offset-8 hover:underline hover:decoration-4"
        >
          Projects
        </a>
        <a
          href=""
          className="hover:decoration-hover hover: ml-5 underline-offset-8 hover:underline hover:decoration-4"
        >
          Skills
        </a>
        <a
          href=""
          className="hover:decoration-hover hover: ml-5 underline-offset-8 hover:underline hover:decoration-4"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
