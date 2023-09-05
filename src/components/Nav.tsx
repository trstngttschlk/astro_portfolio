export default function Nav() {
  return (
    <nav className="flex flex-col justify-between text-lg md:flex-row">
      <div>
        <a href="/" className="text-lg">
          <p>
            Tristan<span className="text-hover">Gottschalk</span>
          </p>
        </a>
      </div>
      {/* <div className="flex flex-col md:flex-row">
        <a
          href=""
          className="underline-offset-8 hover:underline hover:decoration-hover hover:decoration-4"
        >
          Projects
        </a>
        <a
          href=""
          className="underline-offset-8 hover:underline hover:decoration-hover hover:decoration-4 md:ml-5"
        >
          Skills
        </a>
        <a
          href=""
          className="underline-offset-8 hover:underline hover:decoration-hover hover:decoration-4 md:ml-5"
        >
          Contact
        </a>
      </div> */}
    </nav>
  );
}
