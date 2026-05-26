function StatsCard({ label, value }) {
  return (
    <article className="stat">
      <small>{label}</small>
      <strong>{value}</strong>
    </article>
  );
}

export default StatsCard;
