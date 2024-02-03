import PropTypes from 'prop-types';
import './AddForm.scss';
import { useImperativeHandle, useState, forwardRef } from 'react';
const AddForm = forwardRef(({ slug, cols }, ref) => {
  const [toggleAddFormOptions, setToggleAddFormOptions] = useState({
    isVisible: false,
    isRendered: false,
  });
  useImperativeHandle(ref, () => ({
    showAddForm,
  }));
  function showAddForm() {
    setToggleAddFormOptions({ ...toggleAddFormOptions, isRendered: true });
    setTimeout(() => {
      setToggleAddFormOptions((prevOptions) => ({
        ...prevOptions,
        isVisible: true,
      }));
    }, 0);
  }
  function handleClose() {
    setToggleAddFormOptions({ ...toggleAddFormOptions, isVisible: false });
    setTimeout(() => {
      setToggleAddFormOptions((prevOptions) => ({
        ...prevOptions,
        isRendered: false,
      }));
    }, 200);
  }
  function handleSubmit(slug) {
    return (e) => {
      e.preventDefault();
      console.log('handling submit add');
      console.log(slug);
    };
  }
  function closeAddModal(e) {
    if (e.target.contains(e.currentTarget)) {
      console.log('closed modal');
      handleClose();
    }
  }
  if(!toggleAddFormOptions.isRendered) return <></>;
  return (
    <div
      className={`add-wrapper ${toggleAddFormOptions.isVisible ? 'show' : ''}`}
      onClick={closeAddModal}
    >
      <form onSubmit={handleSubmit(slug)}>
        <span className="close-btn" onClick={() => handleClose()}>
          X
        </span>
        <span className="main-title">Add new user</span>
        <div className="form-group-wrapper">
          {cols
            .filter(
              (col) =>
                col.field !== 'id' &&
                col.field !== 'img' &&
                col.field !== 'createdAt'
            )
            .map(({ headerName, type }) => (
              <div className="form-group" key={headerName}>
                <label>{headerName}</label>
                <input
                  type={type === 'string' ? 'text' : 'checkbox'}
                  placeholder={headerName}
                />
              </div>
            ))}
        </div>
        <button className="submit-btn">Add</button>
      </form>
    </div>
  );
});
AddForm.displayName = 'AddForm';
AddForm.propTypes = {
  slug: PropTypes.string.isRequired,
  cols: PropTypes.array.isRequired,
};
export default AddForm;
