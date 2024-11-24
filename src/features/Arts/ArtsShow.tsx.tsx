import { formatCurrency } from "@/utils/helpers";
import { Card, CardContent } from "@/components/ui/card";
import { PopoverArt } from "@/UI/Popover";
import { Arts } from "@/interfaces";

export default function ArtsShow({ arts }: { arts: Arts[] | undefined }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {arts?.map((art, index) => (
        <div key={index} className="item">
          <div className="group relative h-full transition-all duration-300 hover:translate-y-[-5px]">
            <Card className="mx-2 h-full transform transition-all duration-300">
              <CardContent className="flex flex-col p-0">
                <div className="relative">
                  <img
                    src={art.image}
                    alt={art.name}
                    className="h-[400px] w-full rounded object-cover transition-all duration-300"
                  />
                </div>
                <div className="text-right">
                  <PopoverArt id={art.id}></PopoverArt>
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
