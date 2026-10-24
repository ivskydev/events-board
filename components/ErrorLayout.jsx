export default function ErrorLayout({ children }) {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center py-8 text-center bg-pink-50 text-slate-400">
      {children}
    </section>
  );
}