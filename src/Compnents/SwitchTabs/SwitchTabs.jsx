import { useState } from 'react';
import './SwitchTabs.scss';
const SwitchTabs = ({ data, onTabChange }) => {
  const [selected, setSelected] = useState(0);
  const activeTab = (tab, index) => {
    setSelected(index);
    onTabChange(tab, index);
  };
  return (
    <div className="switching_tab">
      {data?.map((tab, index) => {
        return (
          <button
            key={index}
            className={`tabBtn ${selected === index ? 'active' : ''}`}
            onClick={() => activeTab(tab, index)}>
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default SwitchTabs;
