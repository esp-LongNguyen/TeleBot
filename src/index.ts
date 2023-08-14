import type { Client } from "@botpress/client";
import { Bot, messages } from "@botpress/sdk";
import type { z } from "zod";
import { CxGenieBotpress003 } from ".botpress";
// import * as botpress from '.botpress' /** uncomment to get generated code */

type DefaultMessages = typeof messages.defaults;
type DefaultMessageType = keyof DefaultMessages;
type DefaultMessagePayload<T extends DefaultMessageType> = z.infer<
  DefaultMessages[T]["schema"]
>;

type CreateMessageProps = Parameters<Client["createMessage"]>[0];
type CreateMessageBody<T extends DefaultMessageType> = Omit<
  CreateMessageProps,
  "type" | "payload"
> & {
  type: T;
  payload: DefaultMessagePayload<T>;
};

const logger = console;

const bot = new Bot({
  integrations: [
    new CxGenieBotpress003({
      enabled: true,
      config: {
        botToken: "6573601914:AAHRl9nYPRZ2Rc0x5DmqXBzYLq5iUpNysy0",
      },
    }),
  ],
});

bot.message(async ({ message, client, ctx }) => {
  console.log("call message success at:", new Date().toISOString());
  await client.createMessage({
    conversationId: message.conversationId,
    userId: ctx.botId,
    tags: {},
    type: "text",
    payload: {
      text: `Hello. You said: "${message.payload.text}"`,
    },
  });
});

export default bot;
