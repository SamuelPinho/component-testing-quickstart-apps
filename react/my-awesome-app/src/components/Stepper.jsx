import { useState } from 'react';

export default function Stepper({ initial = 0, onChange = () => {} }) {
  return (
    <>
      <label>This is a custom label ~!@#$%^&*()_+=-[]{}\|:",./? UID</label>
      <input id="my-input" type="text" />
    </>
  );
}
