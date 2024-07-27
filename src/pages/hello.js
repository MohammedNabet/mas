import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // إنشاء الجدول إذا لم يكن موجوداً
    const result = await sql`
      CREATE TABLE IF NOT EXISTS Pets (
        Name varchar(255),
        Owner varchar(255)
      );
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error("Error creating table:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
