import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export const metadata = {
  title: 'CareerDNA',
  description: 'Find your dream career today',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}