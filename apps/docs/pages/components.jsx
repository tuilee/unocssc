import { Sidenav } from "../components/Sidenav";

export default function Components() {
  return (
    <>
      <Sidenav />
      <main
        style={{
          marginLeft: "15rem",
        }}
      >
        <div className="p-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Components
          </h1>
          <p className="mt-4 text-lg text-slate-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            sed quod est tenetur. Explicabo voluptates maiores tempora, ipsum
            provident iusto deserunt, at hic, voluptatem reprehenderit velit
            necessitatibus temporibus recusandae? Laborum.
          </p>
        </div>
      </main>
    </>
  );
}
