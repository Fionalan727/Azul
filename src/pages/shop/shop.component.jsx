import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {selectCollections} from '../../redux/shop/shop.selectors'

const ShopPage = ({collections}) =>(

    <div className='shop-page'>
        {collections.map(({id, ...otherCollectionProps})=> (
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
    </div>
)


export default ShopPage;