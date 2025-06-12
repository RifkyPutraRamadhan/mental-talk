import { useState } from 'react';

const TipCard = ({ tip }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="tip-card" onClick={toggleExpand}>
      <div className="tip-content">
        <p>{tip}</p>
        {isExpanded && (
          <div className="tip-details">
            <p>Tips ini bisa kamu praktikkan kapan saja ketika merasa stres atau cemas.</p>
            <small>Klik untuk menutup</small>
          </div>
        )}
      </div>
      {!isExpanded && (
        <div className="read-more">
          <small>Klik untuk detail</small>
        </div>
      )}
    </div>
  );
};

export default TipCard;