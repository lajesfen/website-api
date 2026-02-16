/*
  Warnings:

  - A unique constraint covering the columns `[path]` on the table `portfolio_projects` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `path` to the `portfolio_projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "portfolio_projects" ADD COLUMN     "path" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "portfolio_projects_path_key" ON "portfolio_projects"("path");
