import React from "react";
import "./Restaurant.css";
import { useNavigate } from "react-router-dom";
import { Card, Chip, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../../../State/Authentication/Action";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { isPresentInFavorites } from "../../../config/logic";

const RestaurantCard = ({ data, index }) => {
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  const jwt=localStorage.getItem("jwt");

  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites({restaurantId:data.id,jwt:auth.jwt||jwt}));
  };

  const navigateToRestaurant = () => {
    if(data.open)
    navigate(`/restaurant/${data.address.city}/${data.name}/${data.id}`);
  };

  return (
    <Card className="m-5 w-[18rem] productCard relative">
      <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
      <div className="relative">
        <div
          onClick={navigateToRestaurant}
          className={`${
            data.open ? "cursor-pointer" : "cursor-not-allowed"
          } relative`}
        >
          <img
            className="w-full h-[10rem] rounded-t-md object-cover"
            src={data.images[0]}
            alt=""
          />
          <Chip
            size="small"
            className="absolute top-2 left-2"
            color={data.open ? "success" : "error"}
            label={data.open ? "Open" : "Closed"}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 textPart bg-black bg-opacity-60 text-white lg:flex w-full justify-between">
          <div className="space-y-1">
            <p className="font-semibold text-lg">{data.name}</p>
            <p className="text-gray-300 text-sm">
              {data.description.length > 40
                ? data.description.substring(0, 40) + "..."
                : data.description}
            </p>
          </div>
          <div>
            <IconButton onClick={handleAddToFavorites}>
              {isPresentInFavorites(auth.favorites, data) ? (
                <FavoriteIcon color="primary" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
