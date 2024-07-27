import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // إجراء استعلام لتحديد جميع السجلات من الجدول
    const result = await sql`
      SELECT * FROM login;
    `;
    return NextResponse.json({ pets: result }, { status: 200 });
  } catch (error) {
    console.error("Error selecting from table:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
