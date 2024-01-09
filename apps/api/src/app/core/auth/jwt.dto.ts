export type JWTPayload = {
  iss?: string;
  aud?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  [key: string]: string | number | boolean;
  sub: string;
};
