export function Footer() {
  const copyrightYear = new Date().getFullYear();
  return (
    <footer className="p-4">
      <p>&copy; {copyrightYear} Jason Eastburn</p>
    </footer>
  );
}
