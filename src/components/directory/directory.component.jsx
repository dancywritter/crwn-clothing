import React, { useState } from 'react';

import './directory.styles.scss';

import { sections as InitialSections } from './directory.data';
import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {
  const [sections] = useState(InitialSections);
  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

export default Directory;
