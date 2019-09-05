import { DARK_BLUE } from '../../../constants';
import Text from '../../Text';

const Load = () => (
  <div className="button">
    <Text
      font="HelveticaNeue-Medium"
      size={14}
      color={DARK_BLUE}
    >
      LOAD MORE
    </Text>
    <style jsx>{`
      .button {
        height: 48px;
        width: 416px;
        border: 1px solid;
        border-color: ${DARK_BLUE};
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </div>
);

export default Load;