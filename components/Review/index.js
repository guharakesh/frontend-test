import Text from '../Text';
import Rating from '../rating';

const Review = () => (
  <div className="container">
    <div className="avatar" />
    <div className="user">
      <Text
        size={22}
        font="HelveticaNeue"
        color="black"
      >
        Brian B.
      </Text>
      <Text
        size={16}
        font="HelveticaNeue"
        color="#666666"
      >
        10/9/2018
      </Text>
    </div>
    <div className="body">
      <div className="rating">
        <Rating />
      </div>
      <Text
        size={20}
        color="black"
      >
        {`Don't be fooled by the French name, this place oozes with Californian flair. Their space is phenomenal: bright, warm colors yet clean and inviting. I've been twice for brunch and both times have been incredible! On our next trip to LA, I should really check out dinner since they seem to do more classic French preparations at that time.

        For brunch, drool over the cast-iron pots of shakshouka, perfectly jiggly eggs over kimchi fried rice, marvel at their artful breakfast toasts and do good by ordering a fresh squeezed green juice. You'll need it to feel less guilty when you devour their sweet sticky bun or their creamy delicious Hazelnut puffs. OMG. I'm still dreaming about those cream puffs right now ...

        Calories be damned.`}
      </Text>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        border-bottom: 1px solid;
        border-color: #E6E6E6;
        padding-bottom: 72px;
        margin-bottom: 80px;
      }
      .rating {
        margin-bottom: 20px;
      }
      .user {
        display: flex;
        flex-direction: column;
        margin-left: 32px;
        min-width: 192px;
      }
      .avatar {
        height: 80px;
        min-width: 80px;
        background-color: #D8D8D8;
      }
    `}</style>
  </div>
);

export default Review;