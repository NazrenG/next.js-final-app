import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blogs")
    .select("*, authors(*), categories(*)")
    .order("created_at", { ascending: false });
  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
export async function POST(req) {
  const supabase = await createClient();
  const blog = await req.json();
  const { title, thumbnail, category, body,author } = blog;
  const { data, error } = await supabase.from("blogs").insert({title, thumbnail, category, body,author}).single();

  return new Response(
    JSON.stringify(JSON.stringify(data), {
      message: "Blog added succesfully!",
    }),
    {
      headers: { "Content-type": "application/json" },
    }
  );
}
