
export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-3xl font-bold text-center text-slate-800">Welcome to SmartExpense</h1>
        <p className="mb-8 text-sm text-center text-slate-500">
          Track your income, expenses, and budgets efficiently
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-slate-700 px-4 py-2 text-white hover:bg-slate-800"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-500">
          Don’t have an account? <span className="text-blue-500 underline cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
}
