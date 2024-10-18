"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core"; 
config.autoAddCss = false;



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
        {children}
        </Provider>
      </body>
    </html>
  );
}
