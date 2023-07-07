import Navbar from "/src/components/nav";
import "/app/globals.css";

export const metadata = {
  title: "329 Design",
  description: "329 Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
