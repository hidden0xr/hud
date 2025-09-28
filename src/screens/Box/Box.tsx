import React from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

export const Box = (): JSX.Element => {
  const avatarImages = [
    { src: "/group-2087326834.png", alt: "Group", left: "left-1.5" },
    { src: "/group-2087326836.png", alt: "Group", left: "left-[50px]" },
    { src: "/group-2087326829.png", alt: "Group", left: "left-[94px]" },
    { src: "/group-2087326830.png", alt: "Group", left: "left-[138px]" },
    { src: "/group-2087326831.png", alt: "Group", left: "left-[182px]" },
    { src: "/group-2087326835.png", alt: "Group", left: "left-[226px]" },
    { src: "/group-2087326828.png", alt: "Group", left: "left-[270px]" },
  ];

  return (
    <div className="relative w-[316px] h-[220px]">
      <div className="fixed top-[30px] left-[1574px] w-[318px] h-[220px]">
        <Card className="absolute top-0 left-0 w-[316px] h-[52px] bg-[#1a1f2e66] border-0 rounded-[5px]">
          <CardContent className="p-0 relative h-full">
            {avatarImages.map((avatar, index) => (
              <img
                key={index}
                className={`absolute top-1.5 ${avatar.left} w-10 h-10`}
                alt={avatar.alt}
                src={avatar.src}
              />
            ))}
          </CardContent>
        </Card>

        <Card className="absolute top-[60px] left-0 w-[316px] h-10 bg-[#1a1f2e66] border-0 rounded-[5px]">
          <CardContent className="flex p-0 h-full">
            <Badge className="mt-[7px] w-[134px] h-[26px] ml-[7px] bg-[#4d7cfe33] hover:bg-[#4d7cfe33] text-white border-0 rounded-[5px] flex items-center justify-center">
              <div className="text-left [font-family:'Tajawal',Helvetica] font-normal text-sm tracking-[0] leading-[normal] [direction:rtl]">
                جندي - وزارة الداخلية
              </div>
            </Badge>
          </CardContent>
        </Card>

        <div className="absolute top-[71px] left-[241px] text-left [font-family:'Tajawal',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] [direction:rtl]">
          وظيفتك
        </div>

        <img
          className="absolute w-[4.40%] h-[6.36%] top-[32.27%] left-[92.77%]"
          alt="Subtract"
          src="/subtract.svg"
        />

        <Card className="absolute top-28 left-[185px] w-[135px] h-[50px] bg-[#1a1f2e66] border-0 rounded-[5px]">
          <CardContent className="p-0 relative h-full">
            <div className="absolute top-2 left-[129px] w-0.5 h-[34px] bg-[#4d7cfe]" />

            <div className="absolute top-2 left-[70px] [font-family:'Tajawal',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] [direction:rtl]">
              الكاش
            </div>

            <img
              className="w-[8.89%] top-[18.00%] left-[81.48%] absolute h-[24.00%]"
              alt="Vector"
              src="/vector-1.svg"
            />

            <div className="text-[#4d7cfe] absolute top-[25px] left-[19px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-base text-right tracking-[0] leading-[normal] whitespace-nowrap">
              $ 999 999 999
            </div>
          </CardContent>
        </Card>

        <Card className="absolute top-[170px] left-[185px] w-[135px] h-[50px] bg-[#1a1f2e66] border-0 rounded-[5px]">
          <CardContent className="p-0 relative h-full">
            <div className="absolute top-2 left-[129px] w-0.5 h-[34px] bg-[#4d7cfe]" />

            <div className="absolute top-2 left-[72px] [font-family:'Tajawal',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] [direction:rtl]">
              البنك
            </div>

            <img
              className="w-[13.33%] top-[20.00%] left-[77.04%] absolute h-[24.00%]"
              alt="Vector"
              src="/vector.svg"
            />

            <div className="text-white absolute top-[25px] left-[19px] [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-base text-right tracking-[0] leading-[normal] whitespace-nowrap">
              $ 999 999 999
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
