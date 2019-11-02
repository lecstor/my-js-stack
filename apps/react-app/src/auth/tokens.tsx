import React from "react";
import { useQuery } from "urql";

import useAuth from "./use-auth";

import { getTokens } from "./queries";

const Tokens = () => {
  const auth = useAuth();
  console.log({ auth });
  const [res] = useQuery({
    query: getTokens,
    variables: { email: auth.user.emails[0] }
  });

  if (res.fetching) return null;

  return (
    <>
      <h1>Tokens</h1>
      {JSON.stringify(res.data)}
    </>
  );
};

export default Tokens;
