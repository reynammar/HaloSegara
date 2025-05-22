import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="bg-black-900 min-h-screen text-white w-full overflow-x-hidden">
        <main>
            {children}
        </main>
    </div>
  );
};

export default AuthLayout;
