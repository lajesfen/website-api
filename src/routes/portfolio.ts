import type { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

async function getPortfolioProjects(fastify: FastifyInstance) {
  fastify.get("/projects", async (request, reply) => {
    const projects = await prisma.portfolioProject.findMany();

    return { projects: projects };
  });
}

async function getPortfolioProjectByPath(fastify: FastifyInstance) {
  fastify.get("/projects/:path", async (request, reply) => {
    const { path } = request.params as { path: string };
    const project = await prisma.portfolioProject.findUnique({
      where: { path },
    });

    if (!project) {
      reply.status(404).send({ error: "Project not found" });
      return;
    }

    return { project };
  });
}

export { getPortfolioProjectByPath, getPortfolioProjects };

