import { formatCurrency } from "@/utils/helpers";
import { useArts } from "../Arts/useArts";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function CatalogArts() {
  const navigate = useNavigate();
  const { arts } = useArts();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  const sortOption = searchParams.get("sortBy") || "date-asc";

  // Filter arts based on category
  const filteredArts =
    category === "all"
      ? arts
      : arts?.filter((art) => art.category === category);

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

  return (
    <div className="grid grid-cols-3 gap-6">
      {sortedArts?.map((art, index) => (
        <div key={index} className="item">
          <div className="group relative h-full transition-all duration-300 hover:translate-y-[-5px]">
            <Card
              className="mx-2 h-full transform transition-all duration-300"
              onClick={() => navigate(`/art/${art.id}`)}
            >
              <CardContent className="flex flex-col p-0">
                <div className="relative">
                  <img
                    src={art.image}
                    alt={art.name}
                    className="h-[400px] w-full rounded object-cover transition-all duration-300"
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="font-poppins text-base font-medium">
                    {art.name}
                  </p>
                  <p className="mt-1 font-poppins text-sm text-gray-600">
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
