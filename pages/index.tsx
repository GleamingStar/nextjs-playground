import { useSession, signIn, signOut } from "next-auth/react";

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const {data:session} = useSession();
  if(session) return <div><button onClick={()=>signOut()}>sign out</button></div>


  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      
      <button onClick={()=>signIn()}>sign in</button>
    </div>
  );
}

export default HomePage;
