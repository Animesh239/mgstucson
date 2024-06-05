// available at /api/user/route

import { NextResponse } from "next/server";

export const config = {
  runtime: 'edge',
};

export default async function POST(request) {
 const body = await request.json();
    return NextResponse.json(body);
}
