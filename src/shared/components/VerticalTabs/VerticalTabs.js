import classNames from "classnames";
import "./VerticalTabs.css";
import { useEffect, useState } from "react";

function VerticalTabs({
  tabOptions,
  tabHeader,
  activeTab,
  setActiveTab,
  className,
}) {
  className = classNames(className, "flex flex-row");

  const [active, setActive] = useState(activeTab);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  const renderTab = (tab) => {
    let { renderTab, label, id } = tab;
    if (id !== active) {
      if (renderTab) {
        return renderTab(tab);
      }
      return label;
    } else {
      return renderActiveTab(tab);
    }
  };

  const renderActiveTab = (tab) => {
    let { renderActiveTab, label } = tab;
    if (renderActiveTab) {
      return renderActiveTab(tab);
    }
    return label;
  };

  const tabs = tabOptions.map((option) => {
    return (
      <div
        className="tab"
        onClick={() => {
          setActive(option.id);
          if (setActiveTab) {
            setActiveTab(option.id);
          }
        }}
        key={option.id}
      >
        {renderTab(option)}
      </div>
    );
  });

  const tabsContent = tabOptions?.find((tab) => tab?.id === active)?.content;

  return (
    <>
      <div className={className}>
        <div className="tabs">
          {tabHeader}
          {tabs}
        </div>
        <div className="tabs-divider"></div>
        <div className="tabs-content">{tabsContent || "no active tab!"}</div>
      </div>
    </>
  );
}

export default VerticalTabs;
