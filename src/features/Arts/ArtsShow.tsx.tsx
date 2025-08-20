import { formatCurrency } from "@/utils/helpers";
import { Card, CardContent } from "@/components/ui/card";
import { PopoverArt } from "@/UI/Popover";
import { Arts } from "@/interfaces";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ArtsShow({ arts }: { arts: Arts[] | undefined }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "date-desc";

  const modifier = sortBy === "date-desc" ? -1 : 1;

  const sortedArts = arts?.sort(
    (a, b) =>
      (new Date(a.created_at).getTime() - new Date(b.created_at).getTime()) *
      modifier,
  );
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
      {sortedArts?.map((art, index) => (
        <div key={index} className="item">
          <div className="group relative h-full transition-all duration-300 hover:translate-y-[-5px]">
            <Card className="mx-1 h-full transform transition-all duration-300 sm:mx-2">
              <CardContent className="flex flex-col p-0">
                <div
                  className="relative cursor-pointer"
                  onClick={() => navigate(`/account/manageArts/art/${art.id}`)}
                >
                  <img
                    src={art.image}
                    alt={art.name}
                    className="h-[250px] w-full rounded object-cover transition-all duration-300 sm:h-[300px] md:h-[350px] lg:h-[400px]"
                  />
                </div>
                <div className="text-right">
                  <PopoverArt id={art.id}></PopoverArt>
                </div>
                <div className="p-2 text-center">
                  <p className="font-poppins text-sm font-medium sm:text-base">
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
