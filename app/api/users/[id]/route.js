import { createClient } from "@/utils/supabase/server";

export async function GET(req, { params }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blogs")
    .select("*, authors(*)")
    .eq("author", id)
    .order("created_at", { ascending: false });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
