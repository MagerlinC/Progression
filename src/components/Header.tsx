"use client";

import { useUserSession } from "@/hooks/use-user-session";
import styled from "@emotion/styled";
import { defaultTheme } from "@/theme";

const HeaderWrapper = styled.header({
  padding: defaultTheme.spacing.large,
  gap: defaultTheme.spacing.medium,
  display: "flex",
  flexDirection: "row",
});

export function Header({ session }: { session: string | null }) {
  const [userSessionId, user] = useUserSession(session);

  return (
    <HeaderWrapper>
      {userSessionId ? (
        <h2>Welcome, {user ? user.displayName : "..."}!</h2>
      ) : (
        <h2>Log In</h2>
      )}
    </HeaderWrapper>
  );
}

export default Header;
