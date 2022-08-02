import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>
      <div className="grow">{children}</div>
      <Footer></Footer>
    </div>
  );
}
