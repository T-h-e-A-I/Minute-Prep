// prismaUtils.ts
import { PrismaClient, Types } from "@prisma/client";
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
    const subjects = await prisma.subject.findMany();
    return subjects;
  } catch (error) {
    throw new Error("Failed to fetch users from the database.");
  } finally {
    await prisma.$disconnect();
  }
}
export async function getContents(reqType: Types): Promise<any> {
  try {
    const contents = await prisma.content.findMany({
      where: {
        type: reqType,
      },
    });
    return contents;
  } catch (error) {
    throw new Error("Failed to fetch users from the database.");
  } finally {
    await prisma.$disconnect();
  }
}
export async function getContentsByTeacher(
  reqType: Types,
  teacherId: number
): Promise<any> {
  try {
    const contents = await prisma.content.findMany({
      where: {
        type: reqType,
        teacherId: teacherId,
      },
    });
    return contents;
  } catch (error) {
    throw new Error("Failed to fetch users from the database.");
  } finally {
    await prisma.$disconnect();
  }
}
export async function getContentsBySubject(
  reqType: Types,
  subjectId: number
): Promise<any> {
  try {
    const contents = await prisma.content.findMany({
      where: {
        type: reqType,
        subjectId: subjectId,
      },
    });
    return contents;
  } catch (error) {
    throw new Error("Failed to fetch users from the database.");
  } finally {
    await prisma.$disconnect();
  }
}

//Enter Data
// async function main() {
//   try {
//     const teachers = await prisma.content.createMany({
//       data: [
//         {
//           id: 1,
//           name: "জটিল সংখ্যার n তম মূল নির্ণয় করো খুব সহজেই ...",
//           url: "https://fb.watch/lzwatfzI0_/",
//           image:
//             "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fminuteprep%2Fvideos%2F1302296540379495%2F&show_text=false&width=560&t=0",
//           type: "VIDEO",
//           chapterId: 323,
//           teacherId: 1,
//           subjectId: 3,
//         },
//         {
//           id: 2,
//           name: "Simple Circuit তুল্য রোধ নির্ণয় বেসিক টু বস ft. CKRUET 2022-23",
//           url: "https://fb.watch/lyXynnr40u/",
//           image:
//             "https://www.facebook.com/plugins/video.php?height=312&href=https%3A%2F%2Fwww.facebook.com%2Fminuteprep%2Fvideos%2F1363591321254050%2F&show_text=false&width=560&t=0",
//           type: "VIDEO",
//           chapterId: 123,
//           teacherId: 4,
//           subjectId: 1,
//         },
//         {
//           id: 3,
//           name: "শর্টকাট দিয়ে উচ্চতা নির্ণয়!",
//           url: "https://www.facebook.com/reel/602382791683221/?s=fb_shorts_tab&stack_idx=0",
//           image: "images/contents/1.jpg",
//           type: "REEL",
//           chapterId: 113,
//           teacherId: 2,
//           subjectId: 1,
//         },
//         {
//           id: 4,
//           name: "সরলরেখা সিরিজঃ বর্গের অপর বিন্দু নির্ণয়, পোলার সিস্টেম ব্যবহার করে !",
//           url: "https://www.facebook.com/reel/236132355832647/?s=fb_shorts_tab&stack_idx=0",
//           image: "images/contents/2.jpg",
//           type: "REEL",
//           chapterId: 313,
//           teacherId: 1,
//           subjectId: 3,
//         },
//         {
//           id: 5,
//           name: "ভেক্টর দুইটির মধ্যবর্তী কোণ কত ?",
//           url: "https://www.facebook.com/reel/2770133146462816/?s=fb_shorts_tab&stack_idx=0",
//           image: "images/contents/3.jpg",
//           type: "REEL",
//           chapterId: 111,
//           teacherId: 3,
//           subjectId: 1,
//         },
//         {
//           id: 6,
//           name: "ব্রেকজনিত বল কত?",
//           url: "https://scontent.fdac5-1.fna.fbcdn.net/v/t15.5256-10/351874780_2327685594081118_1746008276717858682_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=poxDX4vwixEAX_YZLch&_nc_ht=scontent.fdac5-1.fna&oh=00_AfBK0WjAtktNiajObi_Pc_zR0pV39juhm4SDyOncfrTtLA&oe=64A82211",
//           image: "images/contents/4.jpg",
//           type: "REEL",
//           chapterId: 113,
//           teacherId: 2,
//           subjectId: 1,
//         },
//         {
//           id: 7,
//           name: "জ্যামিতি ব্যবহার করে অজানা পোলার বিন্দুর স্থানাঙ্ক নির্ণয় করি।",
//           url: "https://www.facebook.com/reel/1265166870758979/?s=fb_shorts_tab&stack_idx=0",
//           image: "images/contents/5.jpg",
//           type: "REEL",
//           chapterId: 313,
//           teacherId: 1,
//           subjectId: 3,
//         },
//         {
//           id: 8,
//           name: "দুইটি গাড়ির মধ্যবর্তী দূরত্ব কত?",
//           url: "https://www.facebook.com/reel/2479799905515871/?s=fb_shorts_tab&stack_idx=0",
//           image: "images/contents/6.jpg",
//           type: "REEL",
//           chapterId: 111,
//           teacherId: 3,
//           subjectId: 1,
//         },
//         {
//           id: 9,
//           name: "Newotonian mechanics series : পাখির বেগ নির্ণয় !",
//           url: "https://www.facebook.com/reel/259768226602702/?s=fb_shorts_tab&stack_idx=0",
//           image: "images/contents/7.jpg",
//           type: "REEL",
//           chapterId: 113,
//           teacherId: 2,
//           subjectId: 1,
//         },
//         {
//           id: 10,
//           name: "ভেক্টর আসলে কী?",
//           url: "https://www.facebook.com/reel/190376880648614/?s=fb_shorts_tab&stack_idx=0",
//           image: "images/contents/8.jpg",
//           type: "REEL",
//           chapterId: 111,
//           teacherId: 3,
//           subjectId: 1,
//         },
//         {
//           id: 11,
//           name: "সরলরেখা সিরিজঃ দু'টি পোলার বিন্দুর মধ্যবর্তী দূরত্ব নির্ণয়।",
//           url: "https://www.facebook.com/reel/935003884457924/?s=fb_shorts_tab&stack_idx=0",
//           image: "images/contents/9.jpg",
//           type: "REEL",
//           chapterId: 313,
//           teacherId: 1,
//           subjectId: 3,
//         },
//         {
//           id: 12,
//           name: "বিস্ফোরিত বোমার বেগ নির্ণয় !!!",
//           url: "https://www.facebook.com/reel/628468409306572/?s=fb_shorts_tab&stack_idx=0",
//           image: "images/contents/10.jpg",
//           type: "REEL",
//           chapterId: 113,
//           teacherId: 2,
//           subjectId: 1,
//         },
//         {
//           id: 13,
//           name: "উচ্চতর গণিত ১ম পত্র ৭.১ সকল সূত্র",
//           url: "https://www.instagram.com/p/CuQ6VVarCfJ/",
//           image:
//             "https://www.instagram.com/p/CuQ6VVarCfJ/?utm_source=ig_embed&amp;utm_campaign=loading",
//           type: "INFOGRAPHICS",
//           chapterId: 317,
//           teacherId: 3,
//           subjectId: 3,
//         },
//       ],
//     });
//     console.log(teachers);
//   } catch (error) {
//     console.log(error);
//   }
// }
// main();

// Check Data
// async function main() {
//   try {
//     const teachers = await prisma.chapter.findMany();
//     console.log(teachers);
//   } catch (error) {
//     console.log(error);
//   }
// }
// main();

//Delete Data
async function main() {
  try {
    const teachers = await prisma.content.deleteMany();
    console.log(teachers);
  } catch (error) {
    console.log(error);
  }
}
main();
