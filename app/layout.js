import { Providers } from "@/redux/provider/privider"
import { Header } from "./components/Header"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Providers>
          <Header/>
            {children}
        </Providers>
      </body>
    </html>
  )
}
