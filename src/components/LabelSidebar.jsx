import { NavLink, useLocation } from 'react-router-dom';

const labels = [
  { path: '/printed', name: 'Printed Labels' },
  { path: '/woven', name: 'Woven Label' },
  { path: '/barcode', name: 'Barcode Stickers' },
  { path: '/heattransfer', name: 'Heat Transfer Stickers' },
];

const LabelSidebar = () => {
  const location = useLocation();

  return (
    <aside className="space-y-3">
      {labels.map((label) => {
        const isActive = location.pathname === label.path;

        return (
          <NavLink
            key={label.path}
            to={label.path}
            className={`block w-full text-left px-4 py-2 rounded transition duration-300
              ${isActive ? 'bg-[#7506B1] text-white' : 'border border-gray-300 text-gray-800 hover:bg-[#7506B1] hover:text-white'}
            `}
          >
            {label.name}
          </NavLink>
        );
      })}
    </aside>
  );
};

export default LabelSidebar;