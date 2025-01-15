/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelect }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <h1 className="title">Selected tab is {activeTab.title}</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                onClick={() => {
                  if (tab.id !== activeTabId) {
                    onTabSelect(tab.id);
                  }
                }}
                className={classNames({ 'is-active': tab.id === activeTabId })}
              >
                <a data-cy="TabLink" href={`#${tab.id}`}>
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="block" data-cy="TabContent">
            {activeTab.content}
          </div>
        </div>
      </div>
    </>
  );
};
