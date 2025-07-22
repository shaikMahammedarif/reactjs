function Head({ company, role, stars, dreamLevel, duration, link }) {
  const renderStars = () => {
    const full = '★'.repeat(stars);
    const empty = '☆'.repeat(5 - stars);
    return full + empty;
  };

  return (
    <div className="dream-card">
      <img src={link} alt={company} className="company-logo" />
      <h2>{company}</h2>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Difficulty:</strong> <span className="stars">{renderStars()}</span></p>
      <p><strong>Dream Level:</strong> {dreamLevel}</p>
      <p><strong>Estimated Prep Time:</strong> {duration}</p>
    </div>
  );
}

export default Head;
