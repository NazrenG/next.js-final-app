import { createClient } from "@/utils/supabase/server";

export async function GET(request, { params }) {
  const supabase = await createClient();
  const { id } = await params;
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function Delete(request, { params }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blogs")
    .delete()
    .eq("id", id)
    .select("*")
    .single();
  if (error) {
    return new Response(JSON.stringify({ error:error.message }), { status: 500 });
  }
  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
export async function PUT(request, { params }) {
  const { id } = await params;
  const supabase = await createClient();
  const { title, description, category, body, thumbnail } = await req.json();
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
  const { data, error } = await supabase
    .from("blogs")
    .update({
      title,
      description,
      category,
      body,
      thumbnail,
    })
    .eq("id", id)
    .select("*")
    .single();
  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
