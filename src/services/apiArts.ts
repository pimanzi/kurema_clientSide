import { Arts } from "@/interfaces";
import supabase from "./supabase";

export async function getArts(): Promise<Arts[]> {
  const { data, error } = await supabase.from("arts").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getRecentArts(): Promise<Arts[]> {
  const { data, error } = await supabase
    .from("arts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
