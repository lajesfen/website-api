import type { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

async function getPortfolioProjects(fastify: FastifyInstance) {
  fastify.get("/projects", async (request, reply) => {
    const projects = await prisma.portfolioProject.findMany();

    return { projects: projects };
  });
}

export default getPortfolioProjects;
