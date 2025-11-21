"use server";

import { createServer } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  content: string | null;
  tags: string[] | null;
  cover_url: string | null;
  is_hidden: boolean;
  created_at: string;
  updated_at: string;
};

// GET ALL (for admin - includes hidden projects)
export async function getAllProjects(): Promise<Project[]> {
  const supabase = await createServer();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Fetch error:", error);
    throw new Error(`Failed to fetch projects: ${error.message}`);
  }

  return data || [];
}
