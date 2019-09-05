import Text from '../Text';
import Review from '../review';

const Reviews = () => (
  <div className="container">
    <div className="label">
      <Text
        size={22}
        color="#666666"
      >
        321 Reviews
      </Text>
    </div>
    <Review />
    <Review />
    <style jsx>{`
      .container {
        margin-top: 50px;
      }
      .label {
        margin-bottom: 50px;
      }
    `}</style>
  </div>
);

export default Reviews;