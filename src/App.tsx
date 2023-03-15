import React, { useEffect } from 'react';
import { useForm, usePlugin } from 'tinacms';
import { TinaEditProvider, useEditState } from 'tinacms/dist/edit-state';
import './App.css'
import { CMS_CONFIG, TestFormValues } from './cmsConfig';

const GoToEdit = () => {
  const { setEdit } = useEditState();
  useEffect(() => {
    setEdit(true);
  }, [])
  return <div>Going into edit mode</div>
}

function App() {
  const [formData, form] = useForm<TestFormValues>(CMS_CONFIG);
  usePlugin(form);

  return (
    <div className="App">
      <TinaEditProvider showEditButton editMode={
        <div className="content">
          <div className="color" style={{ backgroundColor: formData.colors?.bgColor }}>
            {formData.colors?.bgColor}
          </div>
          <ul className="list">
            {formData.list?.map?.(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      }>
        <GoToEdit />
      </TinaEditProvider>
    </div>
  )
}

export default App
