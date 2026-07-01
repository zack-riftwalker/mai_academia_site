import LoginForm from "@/components/LoginForm";

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="text-glow text-main mb-8 text-3xl font-bold">
        ورود به پنل ادمین
      </h1>
      <LoginForm />
    </main>
  );
}
