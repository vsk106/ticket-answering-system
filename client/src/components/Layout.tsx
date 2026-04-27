import { Outlet, useNavigate } from "react-router-dom";
import { authClient } from "../lib/auth-client";

export default function Layout() {
  const navigate = useNavigate();
  const { data: session } = authClient.useSession();

  async function handleSignOut() {
    await authClient.signOut();
    navigate("/login", { replace: true });
  }

  const displayName = session?.user.name || session?.user.email;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <span className="font-semibold text-gray-800">Ticket System</span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">{displayName}</span>
          <button
            onClick={handleSignOut}
            className="text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-50"
          >
            Sign out
          </button>
        </div>
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
