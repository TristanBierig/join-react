import { Typography } from "@mui/material";

type Props = {
  index: number;
  name: string;
  imgUrl: string;
  isActive: number;
  onClick: React.Dispatch<React.SetStateAction<number>>;
};

const ListLink: React.FC<Props> = ({ index, name, imgUrl, isActive, onClick }) => {

  let className = "list-item";
  if (isActive === index) className += " list-item__active";

  return (
    <li className={className} onClick={() => onClick(index)}>
      <button>
        <img src={imgUrl} alt={name} />
        <Typography>{name}</Typography>
      </button>
    </li>
  );
};

export default ListLink;
