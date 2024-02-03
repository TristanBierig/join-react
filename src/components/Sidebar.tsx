import { SetStateAction, useState } from "react";
import ListLink from "./ListLink";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

const links = [
  {
    name: "summary",
    imgUrl: "src/assets/img/summary.svg",
  },
  {
    name: "add task",
    imgUrl: "src/assets/img/add_task.svg",
  },
  {
    name: "board",
    imgUrl: "src/assets/img/board.svg",
  },
  {
    name: "contacts",
    imgUrl: "src/assets/img/contacts.svg",
  },
];

const Sidebar = () => {
  const [isActive, setIsActive] = useState<number>(2);

  const handleClick = (i: SetStateAction<number>) => {
    setIsActive(i);
  };

  return (
    <nav className="sidebar" data-cy="sidebar">
      <ul>
        {links.map((link, i) => (
          <NavLink to={`/${link.name.replace(/\s/g, "-")}`}>
            <ListLink
              key={i}
              index={i}
              name={
                link.name.charAt(0).toLocaleUpperCase() + link.name.slice(1)
              }
              imgUrl={link.imgUrl}
              isActive={isActive}
              onClick={handleClick}
            />
          </NavLink>
        ))}
      </ul>
      <div></div>
    </nav>
  );
};

export default Sidebar;
