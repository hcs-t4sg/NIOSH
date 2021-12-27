import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { Client, createClient, Provider } from 'urql';
import { authkey } from '../secrets.js';

let urqlClient: Client;
type UrqlContainerProps = {
    children: ReactNode
};

export function UrqlContainer({ children }: UrqlContainerProps) { 
   //@ts-ignore 
    const token = null;
    urqlClient = useMemo(() => {
      return createClient({
        url: 'https://niosh.hasura.app/v1/graphql',
        fetchOptions: () => {
          return {
            headers: {
              "x-hasura-admin-secret": authkey
            },
          };
        },
      });
    }, [token]);
    return urqlClient ? <Provider value={urqlClient}>{children}</Provider> : null;
  }
