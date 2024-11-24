import { Review } from "@/interfaces";
import supabase from "./supabase";

export async function getReviews(): Promise<Review[]> {
  const { data, error } = await supabase.from("reviews").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
