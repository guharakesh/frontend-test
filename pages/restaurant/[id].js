import Meta from '../../components/Meta';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Filter from '../../components/Filter';
import Star from '../../components/Star';
import Text from '../../components/Text';
import Dot from '../../components/Dot';
import Reviews from '../../components/Review';

export default () => (
  <div>
    <Meta />
    <Header>Restaurant</Header>
    <div className="rating">
      <Star large />
      <Star large />
      <Star large />
      <Star large />
      <Star large />
    </div>
    <div className="meta">
      <Text size={22} color="#666666">
        Japanese • $$$
      </Text>
      <div className="status">
        <Dot large />
        <Text size={22} color="#666666">
          Open Now
        </Text>
      </div>
    </div>
    <Nav>
      Map
    </Nav>
    <Reviews />
    <style jsx>{`
      .rating {
        margin-top: 16px;
        margin-bottom: 16px;
      }
      .meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 50px;
      }
      .status {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `}</style>
  </div>
);