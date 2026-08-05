import { Button } from "@enterprise-webapp/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Admin App</h1>
      <Button>Create Projects</Button>
    </main>
  );
}
