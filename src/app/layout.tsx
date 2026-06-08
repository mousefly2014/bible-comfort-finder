export const metadata = {
  title: "Bible Comfort Finder",
  description: "Find Bible verses for your emotions"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial", margin: 0 }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
          {children}
        </div>
      </body>
    </html>
  )
}