import { useSelector } from 'react-redux';
import ChatBox from '../ChatBox/ChatBox.jsx';
import NotesCard from '../NotesCard/NotesCard.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import StatsCard from '../StatsCard/StatsCard.jsx';

function DashboardPreview({ expanded = false }) {
  const { noteCount, notes, searchPlaceholder, stats, subject } = useSelector((state) => state.notes);

  return (
    <div className={expanded ? 'dashboard-page-shell' : 'hero-card'} id="dashboard-preview">
      <div className="workspace">
        <div className="workspace-top">
          <strong>Exam Prep Workspace</strong>
          <span>
            {subject} &bull; {noteCount} notes
          </span>
        </div>
        <div className="workspace-main">
          <Sidebar />
          <div className="content lazy-block">
            <div className="search">{searchPlaceholder}</div>
            <div className="stats">
              {stats.map((stat) => (
                <StatsCard key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </div>
            <div className="note-grid">
              {notes.map((note) => (
                <NotesCard key={note.id} note={note} />
              ))}
            </div>
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPreview;
