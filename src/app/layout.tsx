import "./globals.css";
import type { Metadata } from "next";
import { Racing_Sans_One, Inter, Oswald } from "next/font/google";

export const racing = Racing_Sans_One({ subsets: ["latin"], weight: ["400"] });
export const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });
export const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Modal Example",
  description: "Estructura básica del Modal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            quisquam id eaque labore sed, alias tempore, illum inventore, cum
            laudantium accusantium non vitae nesciunt dolorem autem unde
            ducimus. Commodi, consequatur! Ea et, minus cupiditate quia eaque
            perferendis reiciendis mollitia! Voluptatum, iusto labore? Animi
            sunt harum at necessitatibus fuga laudantium exercitationem veniam
            excepturi autem nisi, magni quia maxime itaque repudiandae
            laboriosam? Ipsum consequuntur accusamus distinctio nesciunt aliquid
            ducimus doloribus quas maxime adipisci tempore perspiciatis, veniam
            asperiores minima, soluta qui autem illo voluptatum fugiat totam
            ipsam. Maxime repudiandae harum voluptatem ipsa enim!
          </p>
        </header>
        {children}
        <footer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          harum praesentium quae accusamus incidunt voluptate eligendi cumque
          voluptatibus odio animi. Labore iure debitis neque recusandae earum in
          expedita maxime iste.
        </footer>
      </body>
    </html>
  );
}
