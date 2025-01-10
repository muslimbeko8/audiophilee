import Link from "next/link";
import React from "react";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  FormControl,
  IconButton,
  InputBase,
  NativeSelect,
  Paper,
} from "@mui/material";

const Navbar = () => {
  const navItems = [
    { label: "HOME", href: "/" },
    { label: "HEADPHONES", href: "/headphones" },
    { label: "SPEAKERS", href: "/speakers" },
    { label: "EARPHONES", href: "/earphones" },
  ];

  return (
    <div>
      <div className="h-12 bg-black">
        <div className="flex justify-center">
          <div className="items-center px-4 w-[80%] flex justify-between ">
            <div className="">.</div>
            <div className="text-white grow-1 gap-4 font-sans">
              <span>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </span>
              <span className="font-bold underline cursor-pointer hover:text-gray-400">
                Shop Now
              </span>
            </div>
            <div className="">
              <Box>
                <FormControl fullWidth>
                  <NativeSelect
                    className="text-white bg-gray-800 rounded p-1"
                    defaultValue={10}
                    inputProps={{
                      name: "language",
                      id: "language-selector",
                    }}
                  >
                    <option value={10}>English</option>
                    <option value={20}>Spanish</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="select-none w-24 h-24 cursor-pointer font-bold text-[24px]">
            Exclusive
          </span>
        </Link>

        <nav className="flex gap-8 text-black font-semibold">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <span className="hover:text-gray-600 cursor-pointer text-[16px]">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: 250,
              boxShadow: "none",
              borderRadius: "4px",
            }}
            className="bg-slate-100"
          >
            <InputBase
              placeholder="Search products"
              inputProps={{ "aria-label": "search products" }}
            />
            <IconButton type="button">
              <SearchIcon />
            </IconButton>
          </Paper>

          <IconButton>
            <FavoriteBorderIcon
              fontSize="large"
              className="text-black cursor-pointer hover:text-gray-600 h-7 w-7"
            />
          </IconButton>

          <IconButton>
            <ProductionQuantityLimitsIcon
              fontSize="large"
              className="text-black cursor-pointer hover:text-gray-600 h-7 w-7"
            />
          </IconButton>
        </div>
      </div>

      <div className="h-[1px] bg-black w-full"></div>
    </div>
  );
};

export default Navbar;
