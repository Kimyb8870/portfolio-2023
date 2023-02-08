import "styles/globals.css";
import Header from "components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {/* <Banner/> */}
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
