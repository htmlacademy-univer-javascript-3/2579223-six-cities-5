import { OfferPreview } from '../../types/preview.type';
import PlaceCard from '../PlaceCard/PlaceCard';
import Map from '../Map/Map';
import { useState } from 'react';
import { CityMap } from '../../const';

type CitiesProps = {
  offers: OfferPreview[];
}

function Cities({offers}: CitiesProps): JSX.Element {
  const [hoveredOfferId, setHoveredOfferId] = useState<OfferPreview['id'] | null>(null);
  const activeCity = CityMap.Amsterdam;

  function handleCardHover(offerId: OfferPreview['id'] | null) {
    setHoveredOfferId(offerId);
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
                      Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <PlaceCard key={offer.id} block={'cities'} offer={offer} setActiveCard={handleCardHover} />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map block={'cities'} location={activeCity.location} offers={offers} selectedOfferId={hoveredOfferId} />
        </div>
      </div>
    </div>
  );
}

export default Cities;
