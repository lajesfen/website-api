/*
  Warnings:

  - You are about to drop the `PortfolioProject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "PortfolioProject";

-- CreateTable
CREATE TABLE "portfolio_projects" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "description_large" TEXT,
    "image_url" TEXT NOT NULL,
    "url_repo" TEXT,
    "url_demo" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portfolio_projects_pkey" PRIMARY KEY ("id")
);
