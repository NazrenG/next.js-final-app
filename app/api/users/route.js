import { createClient } from "@/utils/supabase/server";
export async function GET() {
  const supbase = await createClient();
  const { data, error } = await supbase.auth
    .from("users")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
