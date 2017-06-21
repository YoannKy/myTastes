interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'w3PPqDuI3t2EJHVoznQP0G7StWdmw1l3',
  domain: 'mytastes.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
