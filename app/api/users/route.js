import { createClient } from "@/utils/supabase/server";

export async function GET(request) {
  const supabase = await createClient();
  const { data, error: any } = await supabase.auth.getUser();

  if (userError || !user) {
    return new Response(JSON.stringify({ error: "errorrr" }), {
      status: 401,
    });
  }

  const { data: posts, error } = await supabase
    .from("blogs")  
    .select("*, authors(*)")
    .eq("author", user.id);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify(posts), {
    headers: { "Content-Type": "application/json" },
  });
}
