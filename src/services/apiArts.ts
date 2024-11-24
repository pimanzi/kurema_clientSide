import { Art, Arts } from "@/interfaces";
import supabase from "./supabase";

export async function getArts(): Promise<Arts[]> {
  const { data, error } = await supabase.from("arts").select("*, authUsers(*)");

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

export async function insertArt(art: Art) {
  const imageName = `${Math.random()}-${art.image.name}`.replace("/", "");

  const { error: uploadError } = await supabase.storage
    .from("arts")
    .upload(imageName, art.image);
  if (uploadError) {
    throw new Error(`Image upload error: ${uploadError.message}`);
  }

  const { data, error } = await supabase
    .from("arts")
    .insert([
      {
        ...art,
        image: `https://fyzypjerwxdljlptouot.supabase.co/storage/v1/object/public/arts/${imageName}`,
      },
    ])
    .select();

  if (error) {
    throw new Error(`Art insert error: ${error.message}`);
  }

  return data;
}

export async function deleteArt(id: number) {
  const { data, error } = await supabase.from("arts").delete().eq("id", id);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
