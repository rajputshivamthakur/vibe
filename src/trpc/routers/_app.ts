import { baseProcedure, createTRPCRouter } from "../init";
import { messagesRoutrer } from "@/modules/messages/server/procedures";

export const appRouter = createTRPCRouter({
  messages: messagesRoutrer,
});
// export type definition of API
export type AppRouter = typeof appRouter;
