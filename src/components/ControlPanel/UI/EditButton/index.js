import React from 'react';
import 'components/ControlPanel/UI/EditButton/index.scss';

function EditButton(props) {
  const {handler} = props;

  return (
    <button className={'edit-button'} onClick={handler}>
      edit
    </button>
  );
}

export default EditButton;
