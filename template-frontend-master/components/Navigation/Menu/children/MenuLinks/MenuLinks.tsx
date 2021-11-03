import { useSession, signIn, signOut } from 'next-auth/client';
import { Button, Link } from '@material-ui/core';

const MenuLinks: any = () => {
  const [session] = useSession();
  return (
    <>
      <Link href="/" className="mr-8 cursor-pointer">
        Home
      </Link>
      {session && (
        <Link href="/painel" className="mr-8 cursor-pointer">
          Painel
        </Link>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          session
            ? signOut({
                callbackUrl: 'http://localhost:4000',
              })
            : signIn('auth0', {
                callbackUrl: 'http://localhost:4000/painel',
              })
        }
      >
        {session ? 'Deslogar' : 'Acessar'}
      </Button>
    </>
  );
};

export default MenuLinks;
