import { Typography } from "@mui/material";

type Props = {
  name: string;
  imgUrl: string;
};

const NavLink = ({ name, imgUrl }: Props) => {
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <Typography>{name}</Typography>
    </li>
  );
};

export default NavLink;
