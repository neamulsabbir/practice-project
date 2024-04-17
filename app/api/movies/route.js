import data from "@/DB/db.json";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      message: "success",
      data,
    });
  } catch (error) {
    return NextResponse.json(error?.message);
  }
}
