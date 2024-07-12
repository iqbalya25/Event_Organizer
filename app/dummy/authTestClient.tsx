import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";

interface AuthTestClientProps {
  session: Session | null;
}

const AuthTestClient: React.FC<AuthTestClientProps> = ({ session }) => {
  return (
    <div className="p-2 bg-gradient-to-b from-slate-800 to-slate-600 flex gap-2">
      <div className="ml-auto">
        {session && session.user ? (
          <div>
            <p>{session.user.name}</p>
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )}
      </div>
    </div>
  );
};

export default AuthTestClient;
