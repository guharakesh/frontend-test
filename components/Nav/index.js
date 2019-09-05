import { Fragment } from 'react';
import { HORIZONTAL_MARGIN } from '../../constants';

const Nav = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        width: calc(100vw - ${HORIZONTAL_MARGIN} * 2);
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        padding: 0px ${HORIZONTAL_MARGIN};
        height: 80px;
        border-top: 1px solid;
        border-bottom: 1px solid;
        border-color: #E6E6E6;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `}</style>
  </div>
);

Nav.defaultProps = {
  children: (
    <Fragment>
      <div>Item1</div>
      <div>Item2</div>
    </Fragment>
  ),
}

export default Nav;