import Github from "../assets/icons/github-logo.svg";

const Footer = () => {
  return (
    <footer className="h-8 p-2 px-4 flex items-center text-xs text-white font-semibold w-full bg-purple2">
      No results of this form are saved.
      <img
        className="ml-2 cursor-pointer"
        /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        src={Github.src}
        width={16}
        onClick={() => window.open("https://github.com/fourwadu/healthcheck")}
      />
    </footer>
  );
};

export default Footer;
