async function getGreeting() {
  // Call our API route on the server
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/hello`, { cache: 'no-store' });
  if (!res.ok) return { message: "Hello" };
  return res.json();
}

export default async function HomePage() {
  const data = await getGreeting();
  return (
    <section>
      <p className="lead">{data.message}</p>
      <div className="grid">
        <a className="card" href="https://nextjs.org/docs" target="_blank" rel="noreferrer">Docs</a>
        <a className="card" href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>
        <a className="card" href="https://react.dev" target="_blank" rel="noreferrer">React</a>
      </div>
    </section>
  );
}
