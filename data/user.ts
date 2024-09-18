import prisma from "@/lib/db";
import { User } from "@prisma/client";


export const getUserByEmail = async (email: User['email']) => {
  try {
    return await prisma.user.findUnique({
      where: { email },
    });
  } catch (error) {
    return null
  }
};

export const getUserById = async (id: User["id"]) => {
  try {
    return await prisma.user.findUnique({
      where: { id },
    });
  } catch (error) {
    return null
  }
};