import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
export async function POST(request) {
  const supabse = await createClient();
  const { title, description, category, body, thumbnail } =
    await request.json();
  if (!title || !description || !category || !body || !thumbnail) {
    return new Response(JSON.stringify({ error: "All fields are required" }), {
      status: 400,
    });
  }
  if (title.length < 5) {
    return new Response(
      JSON.stringify({ error: "Title must be at least 5 characters long" }),
      { status: 400 }
    );
  }
  const { data, error } = await supabse
    .from("blogs")
    .insert([
      {
        title,
        description,
        category,
        body,
        thumbnail,
      },
    ])
    .select("*")
    .single();
  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
