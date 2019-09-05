import { DARK_BLUE } from '../../../constants';

const FilterInput = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        color: ${DARK_BLUE};
        font-size: 16px;
        margin-left: 24px;
      }
    `}</style>
  </div>
);

FilterInput.defaultProps = {
  children: (
    <div>Filter Input</div>
  ),
};

export default FilterInput;