import React, { useContext } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { GlobalMovieContext } from "../../shared/GlobalContext/GlobalContext";
import { FaHeart } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const FavoriteMovies = () => {
  //base URL
  const url = "https://image.tmdb.org/t/p/original/";
  const { state, removeFromFavorites } = useContext<any>(GlobalMovieContext);

  return (
    <div>
      {" "}
      <Menu>
        <MenuHandler>
          <p className="flex mx-4 font-sans text-lr whitespace-nowrap text-white h-full cursor-pointer hover:text-[#3A68DE]">
            My List
          </p>
        </MenuHandler>
        <MenuList className="scroll-bar bg-background-dark overflow-y h-auto max-h-64">
          {state?.favorites?.length > 0 ? (
            <div>
              {state?.favorites?.map((item: any) => {
                return (
                  <div key={item.id} className="">
                    <MenuItem className="flex bg-background-dark justify-between items-center outline-none hover:bg-transparent border-0">
                      <div className="outline-none border-0 hover:border-0">
                        {" "}
                        <img
                          className="h-16 w-14 bg-center bg-no-repeat bg-cover rounded-md border-0"
                          src={`${url}${
                            item?.poster_path || item?.backdrop_path
                          } `}
                          alt={item?.original_title}
                        ></img>
                      </div>
                      <div>
                        <p
                          onClick={() => removeFromFavorites(item.id)}
                          className="text-[#3A69DF] font-sans font-medium text-m leading-4 "
                          style={{
                            whiteSpace: "nowrap",
                            display: "ruby",
                          }}
                        >
                          Remove <FaRegTrashAlt />
                        </p>
                      </div>
                    </MenuItem>
                  </div>
                );
              })}
            </div>
          ) : (
            <p
              className="text-[#3A69DF] font-sans font-medium text-m leading-4 "
              style={{
                whiteSpace: "nowrap",
                display: "ruby",
              }}
            >
              Add favorites <FaHeart />
            </p>
          )}
        </MenuList>
      </Menu>
    </div>
  );
};

export default FavoriteMovies;
