import { inter } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
        <footer className="bg-blue-500 py-4 text-center text-white">
          <p className="text-l">Hecho por Axel Quintana 🧑‍💻</p>
        </footer>
      </body>
    </html>
  );
}
