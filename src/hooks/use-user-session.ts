"use client";
import { useEffect, useState } from "react";

import { onAuthStateChanged } from "../lib/firebase/auth";
import { User } from "firebase/auth";

export function useUserSession(InitSession: string | null) {
  const [user, setUser] = useState<User | null>(null);
  const [userUid, setUserUid] = useState<string | null>(InitSession);

  // Listen for changes to the user session
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (authUser) => {
      if (authUser) {
        setUserUid(authUser.uid);
        setUser(authUser);
      } else {
        setUserUid(null);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return [userUid, user] as const;
}
