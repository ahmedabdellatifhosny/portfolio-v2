
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";


import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
