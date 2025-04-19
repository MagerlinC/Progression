"use client";
import { createSession, removeSession } from "@/actions/auth-actions";
import { useUserSession } from "@/hooks/use-user-session";
import { signInWithGoogle, signOutWithGoogle } from "@/lib/firebase/auth";
import { Column } from "./Flex";
import Link from "next/link";
import { Button } from "./Button";

type Props = {
  session: string | null;
};
export const HomePageContents: React.FC<Props> = ({ session }) => {
  const [userSessionId] = useUserSession(session);

  const handleSignIn = async () => {
    const userUid = await signInWithGoogle();
    if (userUid) {
      await createSession(userUid);
    }
  };

  const handleSignOut = async () => {
    await signOutWithGoogle();
    await removeSession();
  };

  if (!userSessionId) {
    return (
      <Column>
        <Button onClick={handleSignIn}>Sign In</Button>
      </Column>
    );
  }

  return (
    <Column>
      <Link href={"/progressions"}>Progressions</Link>
      <Link href={"/tracking"}>History</Link>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </Column>
  );
};
