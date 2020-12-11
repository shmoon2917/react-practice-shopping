import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items, routeName, history, match }) => {
  const linkTo = () => {
    history.push(`${match.path}/${routeName}`);
  };

  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={linkTo}>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((_item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
