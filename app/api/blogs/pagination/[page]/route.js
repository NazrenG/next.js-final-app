import { createClient } from "../../../../../utils/supabase/server";

export async function GET(req, { params }) {
  const page = parseInt(params || 1);
  const limit = 5;
  const from = (page - 1) * limit;
  const to = page * limit - 1;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .range(from, to)
    .order("created_at", { ascending: false });
  console.log("Data received:", data);
  console.log("Error:", error);
  const { count } = await supabase
    .from("blogs")
    .select("*,authors(*), categories(*)", { count: "exact", head: true });
  const pages = count / limit;
  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
  return new Response(
    JSON.stringify({
      blogs: data,
      totalPages: pages,
      message: "All blogs returned succesfully!",
    }),
    {
      headers: { "Content-type": "application/json" },
    }
  );
}
