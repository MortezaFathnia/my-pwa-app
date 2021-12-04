import { useEffect, useState } from 'react';
import './filtersMessage.scss';
import classNames from 'classnames';

type user = { id: number; name: string };

const FiltersMessage = (props: any) => {
  const [selected, setSelected] = useState('');

  const Users: user[] = [
    { id: 0, name: 'All' },
    { id: 6, name: 'Jim' },
    { id: 7, name: 'ellen' },
    { id: 8, name: 'Hopa' },
    { id: 9, name: 'Bill' },
    { id: 10, name: 'Jack' },
  ];

  const renderFilters = (items: user[]) => {
    return items.map((item) => {
      return (
        <div
          key={item.id}
          className={classNames('filter-item', {
            selected: selected === item.name,
          })}
          onClick={() => {
            setSelected(item.name);
            props.onSelected(item.id);
          }}
        >
          {item.name}
        </div>
      );
    });
  };
  return <div className="filters-wrapper">{renderFilters(Users)}</div>;
};
export default FiltersMessage;
