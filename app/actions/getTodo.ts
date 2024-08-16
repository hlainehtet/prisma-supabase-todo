"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getTodo() {
  const todos = await prisma.todo.findMany();
  return todos;
}
