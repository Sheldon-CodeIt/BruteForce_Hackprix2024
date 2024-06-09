import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";


// CREATE A POST

export const POST = async (req) => {
    const session = await getAuthSession();
  
    if (!session) {
      return new NextResponse(
        JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
      );
    }
  
    try {
        const { slug, title, desc, steps} = req.body;
        console.log("Hello")

       // Check if steps is defined and is an array before calling map
       const mappedSteps = Array.isArray(steps) ? steps.map(step => ({
            title: step.step,
            desc: step.description,
        })) : [];

        const roadmap = await prisma.roadmap.create({
            data: {
                slug,
                title,
                desc,
                userEmail: session.user.email,
                steps: mappedSteps,
            }
        });

        return new NextResponse(JSON.stringify(roadmap, { status: 200 }));
      } catch (err) {
        console.log(err);
        return new NextResponse(
          JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
      }
};
