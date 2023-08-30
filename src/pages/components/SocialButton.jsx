export default function SocialButton({ children, href }) {
  return (
    <a href={href} className="ml-3 first:ml-0">
      {children}
    </a>
  );
}
