// prismaUtils.ts
import { PrismaClient } from "@prisma/client";
import { get } from "config";

const prisma = new PrismaClient();

export async function getTeachers(): Promise<any> {
  try {
    const teachers = await prisma.teacher.findMany();
    return teachers;
  } catch (error) {
    throw new Error("Failed to fetch users from the database.");
  } finally {
    await prisma.$disconnect();
  }
}
export async function getSubjects(): Promise<any> {
  try {
    const teachers = await prisma.subject.findMany();
    return teachers;
  } catch (error) {
    throw new Error("Failed to fetch users from the database.");
  } finally {
    await prisma.$disconnect();
  }
}
//Enter Data
// async function main() {
//   try {
//     const teachers = await prisma.subject.createMany({
//       data: [
//         {
//           id: 1,
//           name: "Physics",
//           image: "./images/Subjects/physics.png",
//           description:
//             "Animated reel, Infographics, Shortcuts, BUET DU CKRUET IIT SOLVE and much more.",
//         },
//         {
//           id: 2,
//           name: "Chemistry",
//           image: "./images/Subjects/chemistry.png",
//           description:
//             "Reaction Infographics, Visualisation, Memorising tricks, Flash cards, Question Solve and much more.",
//         },
//         {
//           id: 3,
//           name: "Mathematics",
//           image: "./images/Subjects/math.png",
//           description:
//             "Animated explanatory videos and reels, Shortcuts, Calculator hacks, Without calculator hacks.",
//         },
//       ],
//     });
//     console.log(teachers);
//   } catch (error) {
//     console.log(error);
//   }
// }
// main();

//Check Data
// async function main() {
//   try {
//     const teachers = await prisma.subject.findMany();
//     console.log(teachers);
//   } catch (error) {
//     console.log(error);
//   }
// }
// main();
