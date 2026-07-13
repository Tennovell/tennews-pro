export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-[#0a0a0a] m-0 p-0">{children}</body>
    </html>
  );
}

