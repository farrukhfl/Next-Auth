import { getServerSession } from "next-auth";

//first install next-auth
//then great .env file

// NEXTAUTH_URL="http://localhost:3000"
// NEXTAUTH_SECRET="qMGvGripnW6uLJ8G8AdHw/ZTBtucLUgrWLPnz50QFAw="

// GITHUB_ID="de4eb10682dfb4cccf7d"
// GITHUB_SECRET="be3ae86b189c58a1df0b790b54959d2a9771157a" 
// this next secret is created by openssl rand -base64 32 command in terminal and select bash
//and github env created by developer tools in github make sure // http://localhost:3000/api/auth/callback/github this is callback url in github auth
// all type of auth is here 
export default async function Home() {
  const session = await getServerSession()

  return (
   <>
   getServerSession Result 
   {session?.user?.name ? (
    <div>{session?.user?.name}</div>
   ): (
    <div>Not logged in?</div>
   )}
   
   </>
    
  );
}
