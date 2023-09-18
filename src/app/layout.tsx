import "./globals.css";
import { Inter } from "@next/font/google";
import KulitanContextProvider from "@/context/kulitan-context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-gradient-container`}>
				<KulitanContextProvider>{children}</KulitanContextProvider>
			</body>
		</html>
	);
}
