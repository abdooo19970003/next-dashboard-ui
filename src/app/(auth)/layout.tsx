export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>Auth Layout</h2>
      {children}
    </section>
  );
}
