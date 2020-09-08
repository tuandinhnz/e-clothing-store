import React from 'react';
import SHOP_DATA from '../../assets/data/shop.data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { collections: SHOP_DATA };
  }

  renderedCollection = () => {
    return this.state.collections.map((collection) => {
      return (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <h1>SHOP PAGE</h1>
        {this.renderedCollection()}
      </div>
    );
  }
}

export default ShopPage;
