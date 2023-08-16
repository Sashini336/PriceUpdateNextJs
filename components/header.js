export default function Header() {
  return (
    <header>
      <div className="header">
        <img
          id="logo"
          src="https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
        <a id="homeButton" className="link" href="/">
          Home
        </a>
      </div>
    </header>
  );
}
