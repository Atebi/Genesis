import Link from "next/link";

const ExodusPage = () => {
  return (
    <div className="flex gap-6 min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Exodus</h1>
      <p>Next page is Numbers!</p>
      <Link
          href="/numbers"
          className="bg-blue-300 rounded-md px-4 py-2 text-lg hover:bg-blue-500 active:bg-blue-700"
        >
          Numbers
        </Link>
    </div>
  );
};

export default ExodusPage;
