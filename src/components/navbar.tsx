import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GiHamburgerMenu } from "react-icons/gi";

import logo from "@/assets/logo-b.png";
export const Navbar = () => {
  return (
    <nav className="container mx-auto md:pt-7 pt-5 px-4">
      <div className="flex items-center justify-between ">
        <div className="md:w-26 md:h-26 w-18 h-18">
          <img src={logo} alt="logo" />
        </div>
        <ul className="hidden md:flex items-center gap-8 ">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <GiHamburgerMenu className="text-2xl" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
