import supabaseClient from "../utils/supabase.js";

export async function getResources(token, { resource_id, searchQuery, topic_id }) {
  const supabase = await supabaseClient(token);
  let query = supabase
    .from("resources")
    .select("*, topic: topics(name, topic_logo_url), saved: saved_resources(id)");
  if (resource_id) {
    query = query.eq("resource_id", resource_id);
  }
  if (topic_id) {
    query = query.eq("topic_id", topic_id);
  }
  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`);
  }
  const { data, error } = await query;
  if (error) {
    console.error("Error fetching resources :", error);
    return null;
  }
  return data;
}

export async function saveResources(token, { alreadySaved }, saveData) {
  const supabase = await supabaseClient(token);
  if (alreadySaved) {
    const { data, error: deleteError } = await supabase
      .from("saved_resources")
      .delete()
      .eq("resource_id", saveData.resource_id);
    if (deleteError) {
      console.error("Error Deleting saved resources :", deleteError);
      return null;
    }
    return data;
  } else {
    const { data, error: insertError } = await supabase
      .from("saved_resources")
      .insert([saveData])
      .select();
    if (insertError) {
      console.error("Error fetching resources :", insertError);
      return null;
    }

    return data;
  }
}

export async function getSingleResource(token, { resource_id }) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("resources")
    .select("*, topics(name, topic_logo_url)")
    .eq("id", resource_id)
    .single();
  if (error) {
    console.error("Error fetching resource:", error);
    return null;
  }
  return data;
}

export async function addNewResource(token, _, resourceData) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("resources")
    .insert([resourceData])
    .select();
  if (error) {
    console.error("Error Creating New resources :", error);
    return null;
  }
  return data;
}

export async function getSavedResources(token) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("saved_resources")
    .select("* , resource:resources(*, topic: topics(name, topic_logo_url))");
  if (error) {
    console.error("Error fetching saved resources :", error);
    return null;
  }
  return data;
}

export async function getMyResources(token, { provider_id }) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("resources")
    .select("* , topic: topics(name, topic_logo_url)")
    .eq("provider_id", provider_id);
  if (error) {
    console.error("Error fetching resources :", error);
    return null;
  }
  return data;
}

export async function deleteResource(token, { resource_id }) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("resources")
    .delete()
    .eq("id", resource_id)
    .select();
  if (error) {
    console.error("Error deleting resources :", error);
    return null;
  }
  return data;
}

export async function updateResource(token, _, resourceData) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("resources")
    .update({
      title: resourceData.title,
      description: resourceData.description,
      topic_id: resourceData.topic_id,
      // requirements: noteData.requirements,
      author_id: resourceData.author_id,
    })
    .eq("id", resourceData.id)
    .select();

  if (error) {
    console.error("Error updating resource:", error);
    return null;
  }
  return data;
}

export async function getResourceById(token, resourceId) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("resources")
    .select("*, topics(name, topic_logo_url)")
    .eq("id", resourceId)
    .single();

  if (error) {
    console.error("Error fetching resource by ID:", error);
    return null;
  }
  return data;
}