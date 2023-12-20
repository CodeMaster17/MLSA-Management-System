
'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  name: string;
  path: string;
  iconURL: string;
  
};

const MenuItem = ({ name, path, iconURL }: MenuItemProps) => {
  const pathname = usePathname();

  return (
    <div className="text-[#FFF]">
      {
        <Link
          href={path}
          className={`flex flex-row items-center space-x-[1.3rem] px-[1.1rem] py-[0.8rem]  ${path === pathname
            ? "menuItem rounded-[0.5rem] bg-[#CBD5E1] text-[#0F172A]"
            : "text-[#94A3B8]"
            }`}
        >
          <Image
            src={iconURL ?? ""}
            alt="My Image"
            width="24"
            height="24"
            className={`min-h-[2.4rem] min-w-[2.4rem] ${path === pathname ? "custom-svg" : ""
              } `}
          />
          <span className="flex text-[1.4rem] font-medium">{name}</span>
        </Link>
      }
    </div>
  );
};

export default MenuItem;