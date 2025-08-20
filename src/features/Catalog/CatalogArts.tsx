import { formatCurrency } from "@/utils/helpers";
import { useArts } from "../Arts/useArts";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaInfo } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function CatalogArts() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { arts } = useArts();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  const sortOption = searchParams.get("sortBy") || "date-asc";
  const searchQuery = searchParams.get("search") || "";

  // Filter arts based on category
  let filteredArts =
    category === "all"
      ? arts
      : arts?.filter((art) => art.category === category);

  // Filter arts based on search query (name)
  if (searchQuery) {
    filteredArts = filteredArts?.filter((art) =>
      art.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  // Get sorting field and direction from sortOption
  const field = sortOption.split("-")[0];
  const value = sortOption.split("-")[1];

  // Determine sorting direction (ascending or descending)
  const modifier = value === "asc" ? 1 : -1;
  const fieldColumn = field === "price" ? "price" : "created_at";

  // Sort the arts based on the selected field and direction
  const sortedArts = filteredArts?.sort((a, b) => {
    if (fieldColumn === "created_at") {
      // Sort by date
      return (
        (new Date(a.created_at).getTime() - new Date(b.created_at).getTime()) *
        modifier
      );
    }

    // Sort by price
    return (a.price - b.price) * modifier;
  });

  if (!sortedArts || sortedArts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 text-6xl opacity-20">🎨</div>
        <h3 className="mb-2 text-xl font-semibold text-gray-700">
          {searchQuery
            ? t("noSearchResults") || "No artworks found"
            : t("noArtworks") || "No artworks available"}
        </h3>
        <p className="text-gray-500">
          {searchQuery
            ? `${t("tryDifferentSearch") || "Try searching with different keywords"}`
            : `${t("checkBackLater") || "Check back later for new artworks"}`}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {sortedArts?.map((art, index) => (
        <div key={index} className="item">
          <div className="group relative h-full">
            <Card className="h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <CardContent className="flex flex-col p-0">
                <div
                  className="relative cursor-pointer"
                  onClick={() => navigate(`/art/${art.id}`)}
                >
                  <img
                    src={art.image}
                    alt={art.name}
                    className="h-[250px] w-full rounded-t object-cover transition-all duration-300 sm:h-[300px] md:h-[350px] lg:h-[400px]"
                  />

                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-70"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button className="flex items-center gap-2 rounded-full bg-[#ffcb05] px-3 py-2 font-poppins text-sm font-medium text-black transition-colors hover:bg-[#fcde51] sm:px-4 sm:text-base">
                      <FaInfo />
                      <span className="hidden sm:inline">Artwork Details</span>
                      <span className="sm:hidden">Details</span>
                    </button>
                  </div>
                </div>
                <div className="flex-1 p-3 text-center sm:p-4">
                  <p className="line-clamp-2 font-poppins text-sm font-medium sm:text-base">
                    {art.name}
                  </p>
                  <p className="mt-1 font-poppins text-xs text-gray-600 sm:text-sm">
                    {formatCurrency(art.price)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
