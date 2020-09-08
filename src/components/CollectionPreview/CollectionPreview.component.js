import React from 'react';

const CollectionPreview = ({ title, items }) => {
  const renderedPreviewItem = items
    //filter out first 4 items. Considering performance.
    .filter((item, idx) => idx < 4)
    .map((item) => {
      return (
        <div key={item.id}>
          <img
            src={require('../../assets/img/shop-img/hats/brown-brim.png')}
            alt={item.name}
            width="100px"
          />
          {item.name}
        </div>
      );
    });
  return (
    <div>
      <h1>{title}</h1>

      <div>{renderedPreviewItem}</div>
    </div>
  );
};

export default CollectionPreview;
