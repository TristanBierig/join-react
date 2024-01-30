import { Typography } from "@mui/material";

type Props = {
  name: string;
  imgUrl: string;
};

const NavLink = ({ name, imgUrl }: Props) => {
  return (
    <li className="list-item">
      <button>
        <img src={imgUrl} alt={name} />
        <Typography>{name}</Typography>
      </button>
    </li>
  );
};

export default NavLink;
