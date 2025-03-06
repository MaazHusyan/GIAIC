import { NextResponse } from "next/server";
import { importData } from "@/sanity/lib/importToSanity";

export async function POST() {
  await importData();
  return NextResponse.json({ message: "Data imported to Sanity!" });
}

