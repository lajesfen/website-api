import cors from "@fastify/cors";
import Fastify from "fastify";
import { prisma, testConnection } from "./src/lib/prisma";
import getPortfolioProjects from "./src/routes/portfolio";

const port = 3000;
export const fastify = Fastify({
  logger: false,
});

fastify.register(cors);
fastify.register(getPortfolioProjects, { prefix: "/portfolio" });

fastify.get("/", async (request, reply) => {
  return { message: "Beep boop" };
});

async function start() {
  try {
    const dbConnected = await testConnection();
    if (!dbConnected) {
      throw new Error("Failed to connect to the database");
    }

    await fastify.listen({ port: port });
    console.log(`Server listening on port :${port}`);
  } catch (err) {
    await prisma.$disconnect();
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
