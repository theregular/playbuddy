// For using the spotify sdk as a server action instead of through trpc

// "use client";

// import {
//   type AccessToken,
//   type IAuthStrategy,
//   type SdkConfiguration,
//   type SdkOptions,
//   SpotifyApi,
// } from "@spotify/web-api-ts-sdk"
// import { authClient } from "~/server/better-auth/client";

// /**
//  * A class that implements the IAuthStrategy interface and wraps the NextAuth functionality.
//  * It retrieves the access token and other information from the JWT session handled by NextAuth.
//  */
// class BetterAuthStrategy implements IAuthStrategy {
//   public getOrCreateAccessToken(): Promise<AccessToken> {
//     return this.getAccessToken();
//   }

//   public async getAccessToken(): Promise<AccessToken> {
//     const { 
//         data,
//         isPending, //loading state
//         error, //error object
//         refetch, //refetch the session
//     } = authClient.useSession()  

//     if (!data?.session?.token) {
//     console.warn("NEEDS SESSION TO ACCESS SPOTIFY")
//       return {} as AccessToken;
//     }

//     return {
//       access_token: data.session.token,
//       token_type: "Bearer",
//       expires_in: user.expires_in,
//       expires: user.expires_at,
//       refresh_token: user.refresh_token,
//     } as AccessToken;
//   }

//   public removeAccessToken(): void {
//     console.warn("[Spotify-SDK][WARN]\nremoveAccessToken not implemented");
//   }

//   public setConfiguration(configuration: SdkConfiguration): void {
//     console.warn("[Spotify-SDK][WARN]\nsetConfiguration not implemented");
//   }
// }

// function withNextAuthStrategy(config?: SdkOptions) {
//   const strategy = new BetterAuthStrategy();
//   return new SpotifyApi(strategy, config);
// }

// export default withNextAuthStrategy();
