import "./globals.css";

export const metadata = {
  title: "Login - Create Next App",
  description: "Login Page",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@100;400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-grotesk">
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
