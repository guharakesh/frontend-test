import { DARK_BLUE } from '../../../constants';

const Button = ({ children }) => (
  <div>
    <button className="button">{children.toUpperCase()}</button>
    <style jsx>{`
      button {
        padding: 14px 0px;
        width: 151px;
        font-family: 'HelveticaNeue-Medium';
        font-size: 12px;
        border-width: 1px;
        border-color: ${DARK_BLUE};
        color: ${DARK_BLUE};
        display: inline-block;
        text-align: center;
      }
    `}</style>
  </div>
);

Button.defaultProps = {
  children: "Button"
}


export default Button;