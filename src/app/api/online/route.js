import { NextResponse } from "next/server"

export async function GET() {
  const uniqueTimestamp = Date.now();
  const apiUrl = `https://api.lanyard.rest/v1/users/1050576240056209408?timestamp=${uniqueTimestamp}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  return NextResponse.json(data) 
}
