import HomePage from "./home/page";
export default async function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <HomePage />
      </main>
    </>
  );
}
