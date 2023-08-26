import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const params = searchParams.get("category");

	return new Response(JSON.stringify({ name: "Cypher" }), {
		status: 401
	});
}

export async function POST(req: NextRequest) {
	const body = await req.json();

	return new Response("OK");
}