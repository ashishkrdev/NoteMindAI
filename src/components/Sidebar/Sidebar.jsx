import { useDispatch, useSelector } from 'react-redux';
import { setActiveSidebarItem } from '../../redux/slices/uiSlice.js';

function Sidebar() {
  const dispatch = useDispatch();
  const { activeSidebarItem, sidebarItems } = useSelector((state) => state.ui);

  return (
    <aside className="sidebar" aria-label="Workspace sections">
      {sidebarItems.map((item) => (
        <button
          className={`side-item ${activeSidebarItem === item ? 'active' : ''}`}
          key={item}
          onClick={() => dispatch(setActiveSidebarItem(item))}
          type="button"
        >
          {item}
        </button>
      ))}
    </aside>
  );
}

export default Sidebar;
