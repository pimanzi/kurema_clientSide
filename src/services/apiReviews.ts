import { Review, ReviewForm } from "@/interfaces";
import supabase from "./supabase";

export async function getReviews(): Promise<Review[]> {
  const { data, error } = await supabase.from("reviews").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function insertReviews(review: ReviewForm) {
  const { data, error } = await supabase
    .from("reviews")
    .insert([
      {
        names: review.names,
        email: review.email,
        comment: review.comment,
        rate: review.rate,
        artId: review.artId,
      },
    ])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
