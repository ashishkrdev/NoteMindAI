function NotesCard({ note }) {
  return (
    <article className="note-card">
      <span className="tag">{note.tag}</span>
      <h3>{note.title}</h3>
      <p>{note.summary}</p>
    </article>
  );
}

export default NotesCard;
