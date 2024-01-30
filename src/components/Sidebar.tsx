import NavLink from "./NavLink";
import "./Sidebar.scss";

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
  return (
    <nav className="sidebar" data-cy="sidebar">
      <ul>
        {links.map((link) => (
          <NavLink key={link.name} name={link.name} imgUrl={link.imgUrl} />
        ))}
      </ul>
      <div></div>
    </nav>
  );
};

export default Sidebar;
