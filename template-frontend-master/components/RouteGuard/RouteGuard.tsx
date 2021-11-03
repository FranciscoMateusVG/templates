import { useSession, signIn } from 'next-auth/client';

const RouteGuard: any = ({ children }) => {
  const [session, loading] = useSession();

  if (loading) return null;

  if (!loading && !session) {
    return (
      <>
        <p>Faca o login para poder acessar essa pagina</p>
        <br></br>
        <button onClick={() => signIn('auth0')}>Login</button>
      </>
    );
  }

  return <>{children}</>;
};

export default RouteGuard;
