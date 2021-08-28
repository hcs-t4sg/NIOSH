import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { Client, createClient, Provider } from 'urql';

let urqlClient: Client;
type UrqlContainerProps = {
    children: ReactNode
};

export function UrqlContainer({ children }: UrqlContainerProps) {  
    const token = null;
    urqlClient = useMemo(() => {
      return createClient({
        url: 'http://localhost:8080/v1/graphql',
        fetchOptions: () => {
          return {
            headers: {
              Authorization: token ? `Bearer ${token}` : '',
            },
          };
        },
      });
    }, [token]);
    return urqlClient ? <Provider value={urqlClient}>{children}</Provider> : null;
  }
